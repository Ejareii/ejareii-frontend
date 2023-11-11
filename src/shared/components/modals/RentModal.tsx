'use client';
import dynamic from 'next/dynamic'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from "react";
import Modal from "./Modal";
import CategoryInput from '../inputs/CategoryInput';
import { categories, iconDic } from '../navigation/Categories';
import useRentModal from '@/src/hooks/useRentModal';
import Heading from '../common/Heading';
import CountrySelect from '../inputs/CountrySelect';
import Counter from '../inputs/Counter';
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import useCategoriesStore from '@/src/hooks/useCategoriesStore';
import Cookies from 'js-cookie';

let category_Dic:any={
  "دوچرخه":3,
  "موبایل و تبلت ":4,
  "دوربین":7,
  "لوازم ورزشی":9,
  "آلات موسیقی":10,
  "ماشین":1,
  "موتورسیکلت":2,
  "رایانه":5,
  "ابزارآلات":8,
  "کنسول بازی":6,
  "کتونی و کفش":12,
  "لباس":11,
}


enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const router = useRouter();
  const rentModal = useRentModal();
  const CategoriesStore=useCategoriesStore()

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // const handleFilesChange = (files: File[]) => {
  //   setUploadedFiles(files);
  // };
  const handleFileChange = (event:any) => {

    setUploadedFiles(event);
}

  const { 
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
       defaultValues: {
      category_id: '',
      province: '',
      subsetprovince:"",
      Strictness_number: 1,
      imageSrc: '',
      price: 100000,
      name: '',
      description: '',
    }
  });

  const location = watch('location');
  const category_id = watch('category_id');
  const Strictness_number = watch('Strictness_number');

  const imageSrc = watch('imageSrc');

  const Map = useMemo(() => dynamic(() => import('../common/Map'), { 
    ssr: false 
  }), [location]);


  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }





  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.images=uploadedFiles;
    
    
    if (step !== STEPS.PRICE) {
      return onNext();
    }
   console.log(data)

    // setIsLoading(true);
  
    // Overwrite data for finding the category id
    data.category_id = category_Dic[data.category_id];
  
    // Create a new FormData instance
    const formData = new FormData();
    for (const key in data) {
      if(key!=="images"){
     
        formData.append(key,data[key])
      }
    }

    

  
    for (const file of uploadedFiles) {
      try {
        const response = await fetch(file.preview);
        const blob = await response.blob();
        formData.append('images', blob, file.path);
      } catch (error) {
        // Handle any errors that occur during fetch
        console.error('Error fetching image blob:', error);
        toast.error(`Error uploading file: ${file.path}`);
        // Optionally, break or continue based on your needs
        // break;
      }
    }


    // //Authorization
    const token = Cookies.get("token");
    const headers = {
      'authorization': `Bearer ${token}`
    };
  
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    axios.post(`${apiUrl}/v1/rentals/create`, formData, { headers })
      .then(() => {
        toast.success('Listing created!');
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.response.data);  // Log server's error message for more detail
        toast.error('Something went wrong.');
        setIsLoading(false);
      });
  }
  
  

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'ساختن'
    }

    return 'بعدی'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'قبلی'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="کدام یک از اینها دسته بندی کالای شما را بهتر توصیف می کند؟"
        subtitle="یک دسته را انتخاب کنید"
        size='lg'
      />
      <div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[40vh]
          overflow-y-auto
        "
      >
        {CategoriesStore.categories.map((item) => (
          <div key={item.name} className="col-span-1">
            <CategoryInput
              onClick={(category_id) => 
              setCustomValue('category_id', category_id)}
              selected={category_id === item.name}
              label={item.name}
              icon={iconDic[item.icon_name]}
            />
          </div>
        ))}
      </div>
    </div>
  )

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="مکان شما در کجا قرار دارد؟"
          subtitle="به مهمانان کمک کنید شما را پیدا کنند!"
          size="lg"
        />
        <CountrySelect 
          value={location} 
          onChangeProvince={(value) => setCustomValue('province', value)} 
          onChangesubsetProvince={(value) => setCustomValue('subsetprovince', value)} 

        />
        {/* <Map  /> */}
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="برخی از اصول اولیه مکان خود را به اشتراک بگذارید"
          subtitle="چه ویژگی هایی دارید؟"
          size='lg'
        />
        <Counter 
          onChange={(value) => setCustomValue('Strictness_number', value)}
          value={Strictness_number}
          title="" 
          subtitle="مقدار میزان سخت گیری شما چقدر است؟"
        />
       
      </div>
    )
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="یک عکس از کالای  خود اضافه کنید"
          subtitle="به کاربران نشان دهید که کالای شما چگونه است!"
          size='lg'
        />
        <ImageUpload onFilesChange={handleFileChange}
        />
      </div>
    )
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="کالای  خود را چگونه توصیف می کنید؟?"
          subtitle="توصیف کوتاه  بهترین کار را می کند!"
          size='lg'
        />
        <Input
          id="name"
          label="عنوان"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="description"
          label="توضیحات "
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="حالا، قیمت خود را تعیین کنید"
          subtitle="هر شب چقدر هزینه میگیرید؟"
          size='lg'
        />
        <Input
          id="price"
          label="قیمت"
          type="number" 
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="اجاره دادن کالایتان "
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  );
}

export default RentModal;

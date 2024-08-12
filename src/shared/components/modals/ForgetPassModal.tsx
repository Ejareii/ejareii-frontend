'use client';

import {useEffect,  useState } from "react";
import { toast } from "react-hot-toast";
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";
import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../common/Heading";
import axios from "axios";
import useForgetPassModal from "@/src/hooks/useForgetPassModal";

const ForgetPassModal = () => {
  const ForgetPassModal=useForgetPassModal()
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<string | null>(null); // 'error' or 'success'

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: ''
    },
  });

  useEffect(() => {
    if (!ForgetPassModal.isOpen) {
      setMessage(null);
      setMessageType(null);
    }
  }, [ForgetPassModal.isOpen]);

  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    setIsLoading(true);
  
    axios.post(`${apiUrl}/v1/auth/forgetPassword`, data)
      .then((response) => {
        toast.success('An email has been sent to reset your password.');
        setMessage('یک ایمیل برای بازنشانی رمز عبور شما ارسال شده است ');
        setMessageType('success');
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response && error.response.status === 401) {
          // This is where you check for the specific status code and set the message
          setMessage('همچین حساب کاربری وجود ندارد.دوباره امتحان کنید!');
          setMessageType('error');
        } else {
          setMessage('An unexpected error occurred. Please try again later.');
          setMessageType('error');
        }
      });
  };


  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="به اجاره ای خوش آمدید"
        subtitle="در صورت فراموشی رمز خود ایمیل اکانت کاربری خود را وارد کنید!"
      />
{message && (
  <div
    className={`my-4 p-4 rounded shadow-md transition-all duration-300 ${
      messageType === 'error' ? 'bg-red-50 border-l-4 border-red-400 text-red-700' : 'bg-green-50 border-l-4 border-green-400 text-green-700'
    }`}
    role="alert"
  >
    <strong className="font-bold">{messageType === 'error' ? 'خطا: ' : null}</strong>
    <span className="block sm:inline">{message}</span>
  </div>
)}

      <Input
        id="email"
        label="ایمیل"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
      />
    </div>
  )

//   const footerContent = (
//     <div className="flex flex-col gap-4 mt-3">
//       <hr />
//       <Button 
//         outline 
//         label="ادامه دادن با گوگل"
//         icon={FcGoogle}
//         onClick={() => console.log("google")}
//       />
//       <Button 
//         outline 
//         label="ادامه دادن با گیت هاب"
//         icon={AiFillGithub}
//         onClick={() => console.log("github")}
//       />
//       <div className="
//       text-neutral-500 text-center mt-4 font-light">
//         <p>اولین باری که از اجاره ای استفاده می کنید؟
//           <span 
//             onClick={onToggle} 
//             className="
//               text-neutral-800
//               cursor-pointer 
//               hover:underline
//             "
//             > ساختن اکانت </span>
//         </p>
//       </div>
//     </div>
//   )

  return (
    <Modal
      disabled={isLoading}
      isOpen={ForgetPassModal.isOpen}
      title="فراموشی رمز عبور"
      actionLabel="فراموشی رمز عبور"
      onClose={ForgetPassModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
     
    />
  );
}

export default ForgetPassModal;

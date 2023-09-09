'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
// import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";
import Cookies from 'js-cookie';




import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../common/Heading";
import Button from "../common/Button";
import useRegisterModal from "@/src/hooks/useRegisterModal";
import useLoginModal from "@/src/hooks/useLoginModal";

const RegisterModal= () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      lastName:'',
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data)
    setIsLoading(true);

    axios.post('http://localhost:9000/v1/auth/signup', data)
    .then((callback) => {
      Cookies.set("token",callback?.data?.access_token,{ expires: 1 })
      toast.success('Registered!');
      setIsLoading(true);
      registerModal.onClose();
      loginModal.onOpen();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      setIsLoading(false)
    })
   
  }

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="به اجاره ای خوش آمدید"
        subtitle="ساختن اکانت!"
      />
        <Input
          id="name"
          label="نام"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="lastName"
          label="نام خانوادگی"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      <Input
        id="email"
        label="ایمیل"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="رمز"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button 
        outline 
        label="ادامه دادن با گوگل"
        icon={FcGoogle}
        onClick={() => console.log('google')} 
      />
      <Button 
        outline 
        label="ادامه دادن با گیت هاب"
        icon={AiFillGithub}
        onClick={() => console.log('github')}
      />
      <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p> یک حساب کاربری دارید؟
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            >ورود</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="ثبت نام"
      actionLabel="ادامه دادن "
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;

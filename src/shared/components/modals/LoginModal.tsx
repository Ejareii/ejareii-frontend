'use client';

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Cookies from 'js-cookie';
// import { signIn } from 'next-auth/react';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import Input from "../inputs/Input";
import useLoginModal from "@/src/hooks/useLoginModal";
import useRegisterModal from "@/src/hooks/useRegisterModal";
import Heading from "../common/Heading";
import Button from "../common/Button";
import axios from "axios";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });
  
  const onSubmit: SubmitHandler<FieldValues> = 
  (data) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(data)
    setIsLoading(true);
    
    axios.post(`${apiUrl}/v1/auth/login`, data)
    .then((callback) =>{
      Cookies.set("token",callback?.data?.access_token,{ expires: 1 })
      toast.success('Logged in');
      setIsLoading(false)
      router.refresh();
      loginModal.onClose();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message);
      setIsLoading(false)
      console.log(error?.response?.data?.message)
    });

    
  }

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="به اجاره ای خوش آمدید"
        subtitle="وارد حساب کاربری خود شوید!"
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
        onClick={() => console.log("google")}
      />
      <Button 
        outline 
        label="ادامه دادن با گیت هاب"
        icon={AiFillGithub}
        onClick={() => console.log("github")}
      />
      <div className="
      text-neutral-500 text-center mt-4 font-light">
        <p>اولین باری که از اجاره ای استفاده می کنید؟
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > ساختن اکانت </span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="ورود"
      actionLabel="ادامه دادن"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;

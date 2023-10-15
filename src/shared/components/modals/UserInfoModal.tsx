import useUserInfoModal from "@/src/hooks/useUserInfoModal";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import Modal from "./Modal";
import Heading from "../common/Heading";
import getUserInfo from "@/app/actions/getUserInfo";


const UserInfoModal= ()=>{
    // const router = useRouter();
    const userInfoModal=useUserInfoModal();
    const [isLoading, setIsLoading] = useState(false);
    // const data=await getUserInfo(userInfoModal.userId);
    console.log(userInfoModal.name)


    // const onToggle = useCallback(() => {
    //     loginModal.onClose();
    //     registerModal.onOpen();
    //   }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
        <h1> نام :{userInfoModal.name}</h1>
        <h1>  نام خانوادگی : {userInfoModal.lname} </h1>
        <h1>  ایمیل : {userInfoModal.email} </h1>
        <h1>    شماره تماس  : 09904163819 </h1>



     
        </div>
      )

    return (
        <Modal
          disabled={isLoading}
          isOpen={userInfoModal.isOpen}
          title="مشخصات رزرو کننده"
          actionLabel="ارتباط با رزرو کننده"
          onClose={userInfoModal.onClose}
          onSubmit={()=>{}}
          body={bodyContent}
        //   footer={footerContent}
        />
      );
}


export default UserInfoModal;
import useUserInfoModal from "@/src/hooks/useUserInfoModal";
import {  useState } from "react";
import Modal from "./Modal";
import useHostInfoModal from "@/src/hooks/useHostInfoModal";



const HostInfoModal= ()=>{
    // const router = useRouter();
    const userInfoModal=useHostInfoModal();
    const [isLoading, setIsLoading] = useState(false);
    // const data=await getUserInfo(userInfoModal.userId);


    // const onToggle = useCallback(() => {
    //     loginModal.onClose();
    //     registerModal.onOpen();
    //   }, [loginModal, registerModal])

    const bodyContent = (
      <div className="flex flex-col gap-4 p-6 bg-blue-50 rounded shadow-md transition-all duration-300 ease-in-out">
          <div className="flex items-center gap-4 hover:bg-blue-100 p-2 transition duration-200 ease-in-out transform hover:scale-105">
              <label className="font-medium text-gray-700">نام:</label>
              <span className="font-light text-gray-600">{userInfoModal.name}</span>
          </div>
          <div className="flex items-center gap-4 hover:bg-blue-100 p-2 transition duration-200 ease-in-out transform hover:scale-105">
              <label className="font-medium text-gray-700">نام خانوادگی:</label>
              <span className="font-light text-gray-600">{userInfoModal.lname}</span>
          </div>
          <div className="flex items-center gap-4 hover:bg-blue-100 p-2 transition duration-200 ease-in-out transform hover:scale-105">
              <label className="font-medium text-gray-700">ایمیل:</label>
              <span className="font-light text-gray-600">{userInfoModal.email}</span>
          </div>
          <div className="flex items-center gap-4 hover:bg-blue-100 p-2 transition duration-200 ease-in-out transform hover:scale-105">
              <label className="font-medium text-gray-700">شماره تماس:</label>
              <span className="font-light text-gray-600">09904163819</span>
          </div>
      </div>
  )
    return (
        <Modal
          disabled={isLoading}
          isOpen={userInfoModal.isOpen}
          title="مشخصات میزبان"
          actionLabel="ارتباط با میزبان"
          onClose={userInfoModal.onClose}
          onSubmit={()=>{}}
          body={bodyContent}
        //   footer={footerContent}
        />
      );
}


export default HostInfoModal;
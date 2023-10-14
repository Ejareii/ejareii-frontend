'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";




import Avatar from "../Avatar";
import useLoginModal from "@/src/hooks/useLoginModal";
import useRegisterModal from "@/src/hooks/useRegisterModal";
import useRentModal from "@/src/hooks/useRentModal";
import MenuItem from "./Menuitem";
import Cookies from "js-cookie";

interface UserMenuProps {
  currentUser?: any
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  return ( 
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div 
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          اجاره دادن کالایتان
        </div>
        <div 
        onClick={toggleOpen}
        className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar  />
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
             <>
             <MenuItem 
               label="اگهی های زرو شده من " 
               onClick={() => router.push('/myResrv')}
             />
             <MenuItem 
               label="مورد علاقه های من " 
               onClick={() => router.push('/myFavorites')}
             />
             <MenuItem 
               label="اگهی های من زرو شده توسط بقیه" 
               onClick={() => router.push('/myResrvOthers')}
             />
             <MenuItem 
               label="آگهی های من" 
               onClick={() => router.push('/myRentAds')}
             />
             <MenuItem 
               label="اجاره دادن کالایتان" 
               onClick={rentModal.onOpen}
             />
             <hr />
             <MenuItem 
               label="خروج" 
               onClick={()=>{
                Cookies.remove('token');
                window.location.reload();
                // // toggleOpen();
              }
              }
             />
           </>

            ) : (
              <>
              <MenuItem
              onClick={()=>{
                loginModal.onOpen();
                toggleOpen()
              }}
              label="ورود"/>
                <MenuItem
              onClick={()=>{
                registerModal.onOpen()
              }}
              label="ثبت نام "/>
              </>
            )}
          </div>
        </div>
      )}
    </div>
   );
}
 
export default UserMenu;
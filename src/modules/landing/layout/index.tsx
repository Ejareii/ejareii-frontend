"use client";

import { MainLayout } from '@/src/shared/components/layouts/main-layout'
import localFont from "next/font/local"
import '../../../../app/globals.css'
import RegisterModal from '@/src/shared/components/modals/RegisterModal'
import ToasterProvider from '@/src/providers/ToasterProvider'
import LoginModal from '@/src/shared/components/modals/LoginModal'
import RentModal from '@/src/shared/components/modals/RentModal'
import SearchModal from '@/src/shared/components/modals/SearchModal'
import Cookies from 'js-cookie';
import getCurrentUser from '@/app/actions/getCurrentUser';
import  { useEffect, useState } from 'react';
// import "swiper/css";

const myFont = localFont({ src: '../../../../fonts/IRANYekanBold.ttf' })

const LandingLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const [currentUser, setCurrentUser] = useState(null);
 

 


    const token = Cookies.get('token');
    useEffect(() => {
      console.log("useEffect called")
      if (token) {
        getCurrentUser(token)
          .then((userData) => {
            // Handle the user data
            setCurrentUser(userData);
          })
          .catch((error) => {
            // Handle errors
            console.error('Error fetching current user:', error);
          });
      }
    }, [token]); 
  
   
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <ToasterProvider />
        <RentModal />
        <SearchModal />
        <LoginModal />
        <RegisterModal />
        <MainLayout currentUser={currentUser} >
          <div>{children}</div>
        </MainLayout>
      </body>
    </html>
  );
};

export default LandingLayout;

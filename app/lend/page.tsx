"use client";
import StoreInitClient from "@/src/infrastructure/components/storeInitializer/StoreInitClient";
import { useBearStore } from "@/src/infrastructure/store/store";
import { MainLayout } from "@/src/shared/components/layouts/main-layout";

export default function Lend() {
  console.log(process.env.NEXT_PUBLIC_TEST);
  // let data = useBearStore()
  // console.log({data});
  
  return (
    <main className="">
      <StoreInitClient storeName={'useBearStore'} params={undefined}/>
      {/* <h1>{data.bears}</h1> */}
    </main>
  );
}


"use client";
import { MainLayout } from "@/src/shared/components/layouts/main-layout";

export default function Lend() {
  console.log(process.env.NEXT_PUBLIC_TEST);

  return (
    <main className="">
      <h1>yyyyy</h1>
    </main>
  );
}

Lend.getLayout = (page: any) => {
  return <MainLayout>
    {page}
  </MainLayout>
};

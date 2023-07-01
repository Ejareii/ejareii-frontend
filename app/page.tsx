"use client";
import { MainLayout } from "@/src/shared/components/layouts/main-layout";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_TEST);

  return (
    <main className="">
      <h1>yyyyy</h1>
    </main>
  );
}

Home.getLayout = (page: any) => {
  return <MainLayout>
    {page}
  </MainLayout>
};

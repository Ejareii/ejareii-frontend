"use client";
import { useBearStore } from "@/src/infrastructure/store/store";
import { MainLayout } from "@/src/shared/components/layouts/main-layout";

export default function Rentals() {
  console.log(process.env.NEXT_PUBLIC_TEST);

  const x = useBearStore(store => store)

  return (
    <main className="">
      <h1>{x.bears}</h1>
      <button
      onClick={()=>x.increase(10)}
      >increase</button>
    </main>
  );
}

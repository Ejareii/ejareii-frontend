import { useBearStore } from "@/src/infrastructure/store/store";
import RentalsTable from "@/src/modules/rentals/rentalsTable";
import { MainLayout } from "@/src/shared/components/layouts/main-layout";
import { fetchWrapper } from "@/src/shared/utils/fetchWrapper";

export default async function Rentals() {
  console.log(process.env.NEXT_PUBLIC_TEST);

  //const x = useBearStore(store => store)
  let apiData = await fetchWrapper("https://jsonplaceholder.typicode.com/todos")as string[]
  console.log({apiData});
  
  return (
    <main className="">

      {/* <h1>{x.bears}</h1>
      <button
      onClick={()=>x.increase(10)}
      >increase</button> */}
      <RentalsTable array={apiData}/>
    </main>
  );
}

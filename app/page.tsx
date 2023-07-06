import { MainLayout } from "@/src/shared/components/layouts/main-layout";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_TEST);

  return (
    // <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
    <div className="h-full border-2 border-gray-200
                border-opacity-60 rounded-lg
                overflow-hidden">
 
        <div className="p-6 hover:bg-green-600
                    hover:text-white transition
                    duration-300 ease-in">
 
            <h1 className="text-2xl font-semibold mb-3">
                Hover
            </h1>
        </div>
    </div>
      
  );
}

Home.getLayout = (page: any) => {
  return <MainLayout>
    {page}
  </MainLayout>
};

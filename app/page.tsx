import { MainLayout } from "@/src/shared/components/layouts/main-layout";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_TEST);

  return (
    // <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
    <h1 className="text-6xl font-bold underline new">
    Hello world!
  </h1>
      
  );
}

Home.getLayout = (page: any) => {
  return <MainLayout>
    {page}
  </MainLayout>
};

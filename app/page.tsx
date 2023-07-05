import { MainLayout } from "@/src/shared/components/layouts/main-layout";
import { Button, Grid, Stack } from "@mui/material";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_TEST);

  return (
    // <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1>Using Material UI with Next.js 13</h1>
      
  );
}

Home.getLayout = (page: any) => {
  return <MainLayout>
    {page}
  </MainLayout>
};

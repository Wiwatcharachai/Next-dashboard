import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Container, Grid, Text } from "@mantine/core";
import MyChart from "@/src/MyChart";
import RadialBarBox from "@/src/RadialBarBox";
import AreaChartBox from "@/src/AreaChartBox";
import CompareLineChartBox from "@/src/CompareLIneChartBox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashbaord</title>
        <meta name="description" content="Analytics Dashbaord" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Grid>

          <Grid.Col>
            <Text fz="lg">จำแนกประเภท</Text>
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <RadialBarBox name={"ข้อมูลลำดับที่ 1"} percent={72} value={1500} />
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <RadialBarBox name={"ข้อมูลลำดับที่ 2"} percent={18} value={500} />
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <RadialBarBox name={"ข้อมูลลำดับที่ 3"} percent={11} value={1896} />
          </Grid.Col>

          <Grid.Col md={6} lg={3}>
            <RadialBarBox name={"ข้อมูลลำดับที่ 4"} percent={11} value={511} />
          </Grid.Col>
    
          <Grid.Col >
            <AreaChartBox />
          </Grid.Col>

          <Grid.Col>
            <CompareLineChartBox/>
          </Grid.Col>
        </Grid>
        {/* </Container>  */}
      </main>
    </>
  );
}

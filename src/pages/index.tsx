import React, { FC } from "react";
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import { getPosts, getCategories, getPostsByCategoryId} from "../lib/api"
import Paper from '@mui/material/Paper';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import Link from '@mui/material/Link';
import MainHome from "../components/MainHome.js"

 

 
 // export default function Home() {
  export default function Home( ) {  
  return (
    <Page>
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      {/* <Header />  */}
      <main>
        {/*} <MainHome title="共建美好数字新世界" posts={posts}  type="home"/>   */}
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
 
 
 /*
export async function getServerSideProps() {
  // let posts = await getPosts();
   let id = 'dGVybToz'
  // let cats = await getCategories();
   let posts = await getPostsByCategoryId(id);
   return {
     props: {
       posts 
     }
   }
 }
  */
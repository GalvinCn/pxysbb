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

const Home = ({ posts, cats }) => {
 // export default function Home() {
  return (
    <Page>
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <Header />
      {posts.map((post, index) => (  
                    <Paper key={index} elevation={3}>
                          <div key={index} >
                                
                                <Link href={`/posts/${post.node.id}`}>
                                    <a style={{color:'blue'}}>{post.node.title}</a>
                                </Link>            
                                <div dangerouslySetInnerHTML={{__html:post.node.excerpt}} />
                        </div> 
                    </Paper>
                      
                    ))}    
      
      <main>
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

export default Home
 
export async function getServerSideProps(ctx) {
  // let posts = await getPosts();
   let id = 'dGVybTozNg=='
   let cats = await getCategories();
   let posts = await getPostsByCategoryId(id);
   return {
     props: {
       posts,
       cats
     }
   }
 }
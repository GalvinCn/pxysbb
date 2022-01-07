import { getPageByTitle, getSinglePost, getCategories,  getPostsByCategoryId } from "../../lib/api";
import Head from "next/head";
import * as React from 'react'; 
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container'
import { Divider } from '@mui/material';
import Main  from "../../components/MainContent.js" 
import Link from '@material-ui/core/Link'  
import Image from 'next/image'  


export default function Page({ page }) {  
   // const posts = post.categories.edges[0].node.posts.edges
   // const catName = post.categories.edges[0].node.name 
   const myPage = page[0].node
   console.log('0107  myPage ', myPage)        
    return (       
        <>
            <Container maxWidth="lg">                
                <Divider />  
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10}>
                         {myPage.content}    
                    </Grid>
                    
                </Grid> 
                
            </Container> 
        </> 
    )
}

export async function getServerSideProps(ctx) {
    let { title } = ctx.params;
    //console.log('getSinglePost(id)', id)     
    let page = await getPageByTitle(title);
  //  let cats = await getCategories();
    //let posts = await getPostsByCategoryId(post.categories.edges[0].node.categoryId);  

    return {
        props: {
            page 
        }
    }
}


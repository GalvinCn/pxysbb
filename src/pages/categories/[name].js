import { getPosts, getCategories, getSingleCategory, getPostsByCategoryId, getPostsByCategoryName } from "../../lib/api";

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container'
import { Divider } from '@mui/material';
//import Link from '@material-ui/core/Link'
import Main from "../../components/MainList.js"  


export default function Category({ posts }) { 
    console.log('0107 管理制度 ', posts)
  //  const myPosts = posts[0].node
   // console.log('0107 myPage ', myPage) 
    return (
        <>  
            <Container maxWidth="lg">
                <Divider />  
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                          <Main title='管理制度' posts={posts} type='category' />  
                    </Grid>                     
                </Grid> 
                <hr /> <br />               
            </Container>          
        </>
    )
}

export async function getServerSideProps(ctx) {
    let { name } = ctx.params;    
   // let cats = await getCategories();
    //let category = await getSingleCategory(id);
    //console.log('export async function getServerSideProps(ctx){', category)
    // alert('wait getSingleCategory')
    let posts = await getPostsByCategoryName(name);
    console.log('export async function getServerSideProps(ctx){', posts)
    // alert('wait getPostsByCategoryId')
    return {
        props: { 
            posts
        }
    }
}

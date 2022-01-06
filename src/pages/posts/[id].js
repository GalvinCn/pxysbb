import { getSinglePost, getCategories,  getPostsByCategoryId } from "../../lib/api";
import Head from "next/head";
import * as React from 'react'; 
import Grid from '@mui/material/Grid';
import Container from '@material-ui/core/Container'
import { Divider } from '@mui/material';
import Main  from "../../components/MainContent.js" 
import Link from '@material-ui/core/Link'  
import Image from 'next/image'  


export default function Post({ post, cats }) {   
    

    const posts = post.categories.edges[0].node.posts.edges
    const catName = post.categories.edges[0].node.name 
   
    return (       
        <>
            <Container maxWidth="lg">
                
                <Divider />  
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10}>
                        <Main title={post.title} post={post} type="post"/>  
                    </Grid>
                    <Grid item xs={12} md={2}>                          
                        <br/><br/><br/><br/>{ catName }                          

                       {posts.map((item,index) => (
                            <div key={index}   >
                                  <Link href={`/posts/${item.node.id}`}>
                                      <a style={{color:'blue'}}>{item.node.title}</a>
                                  </Link> 
                                  <br/><br/>
                            </div>
                        ))}
                                              
                    </Grid>  
                </Grid> 
                
            </Container> 
        </> 
    )
}

export async function getServerSideProps(ctx) {
    let { id } = ctx.params;
    //console.log('getSinglePost(id)', id)     
    let post = await getSinglePost(id);
    let cats = await getCategories();
    //let posts = await getPostsByCategoryId(post.categories.edges[0].node.categoryId);
     

    return {
        props: {
            post,         
            cats
        }
    }
}


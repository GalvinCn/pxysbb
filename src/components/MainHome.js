import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'; 
import Image from 'next/image' 

function MainHome(props) {
    const { posts, title, type } = props.posts;
    console.log('0106 posts ', posts)
    var post
    for (post in posts) {
        console.log(post)
    }
     
    let mediaItemUrl = [] 
    //console.log('1123 featured image', posts.edges[0].node.featuredImage.node.mediaItemUrl)    
    mediaItemUrl.push("https://web.datalibstar.com/wp-content/uploads/2021/10/未标题-8-01.png")    
    return (
        <>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom>
                    <hr />
                </Typography>
            </Paper>
            <br />

            <h3>关于我们</h3>

            <Divider />

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 1200,
                        height: 360,
                    },
                }}
            > 

            </Box>

            <h3>成果展示</h3>
            <Divider />

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 280,
                        height: 380,
                    },
                }}
            >
                 
                
             {posts.map((post,index) => (  
                    <Paper key={index} elevation={3}>
                          <div key={index}  >
                                  
                                <Link href={`/posts/${post.node.id}`}>
                                    <a style={{color:'blue'}}>{post.node.title}</a>
                                </Link>            
                                <div dangerouslySetInnerHTML={{__html:post.node.excerpt}} />
                        </div> 
                    </Paper>
                      
                 ))}     



            </Box>
            


        </>
    );
}



export default MainHome;
import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'; 

function Main(props) {
  const { posts, title, type } = props; 

  return ( 
    <Grid item xs={12} md={8}  >
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          <hr/>
          <br/>
        </Typography> 
      </Paper>
     
      <div  >
          {posts.map((post,index) => (  
            <div key={index}  > 
              <br />
                <Link href={`/posts/${post.node.id}`}>
                    <a style={{color:'blue'}}>{post.node.title}</a>
                </Link>            
                <div dangerouslySetInnerHTML={{__html:post.node.excerpt}} />
            </div>
          ))}    
        </div>   
    </Grid>
  );
} 

export default Main;
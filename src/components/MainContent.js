import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';


function Main(props) {
  const { post, title, type } = props;

  return (    
             <>
                   <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                        <Typography variant="h6" gutterBottom>
                            <hr/>
                        </Typography>
                    </Paper>                    
                    <CardActionArea component="a" href="#">
                        <Card sx={{ display: 'flex' }}>
                            <CardContent sx={{ flex: 1 }}>
                                <Typography component="h2" variant="h5">
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {post.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {post.description}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                </Typography>
                            </CardContent>
                           
                        </Card>
                    </CardActionArea>
              </>
  );
}

 

export default Main;
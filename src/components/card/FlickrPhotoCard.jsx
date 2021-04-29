import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function FlickrPhotoCard({photo}) {
  const classes = useStyles();
  function getAuthorProfileUrl(id){
    return `https://www.flickr.com/people/${id}`
  }
  function getPhotoTags(tag){
    if(tag.length){
      return tag.split(' ')
    } else {return []}
  }
 
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <a target="_blank" rel="noreferrer" href={photo.link}>{photo.title}</a>
        <span> by </span>
        <a target="_blank" rel="noreferrer" href={getAuthorProfileUrl(photo.author_id)}>{photo.author}</a>
        </Typography>
        <Typography variant="h5" component="h2" dangerouslySetInnerHTML={{__html: photo.description}}>

        </Typography>
        {getPhotoTags(photo.tags).map((tag,index) =>(<Chip label={tag} key={index}/>))}
        
      </CardContent>
    </Card>
  );
}

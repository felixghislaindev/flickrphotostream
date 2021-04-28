import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
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
  const bull = <span className={classes.bullet}>•</span>;
  const preventDefault = (event) => event.preventDefault();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <Link href="#" onClick={preventDefault}>
        {photo.title}
      </Link>
        <span>by</span>
        <Link href="#" onClick={preventDefault}>
        {photo.author}
      </Link>
        </Typography>
        <Typography variant="h5" component="h2">
          {photo.description}
        </Typography>
        {photo.tags.map((tag,index) =>(<Chip label={tag} />))}
        
      </CardContent>
    </Card>
  );
}

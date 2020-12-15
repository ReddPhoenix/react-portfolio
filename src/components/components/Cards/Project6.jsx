import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href='https://uofu-project-1.github.io/Book-vs-Movie/' target='_blank'>
        <CardMedia
          component="img"
          alt="Book vs Movie"
          height="140"
          image="/assets/projects/book-vs-movie.png"
          title="Book vs Movie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Book vs Movie
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
 The app leverages the Goodreads API and the OMDB API to compare ratings of books and movies to determine if the book is truly always better than the movie. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href='https://uofu-project-1.github.io/Book-vs-Movie/' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/Book-vs-Movie' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
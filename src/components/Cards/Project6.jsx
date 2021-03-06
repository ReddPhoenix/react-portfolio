import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/book-vs-movie.png';

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
          image={image1}
          title="Book vs Movie"
          className="image-border"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Book vs Movie
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The app leverages the Goodreads API and the OMDB API to compare ratings of books and movies to determine if the book is truly always better than the movie. (Note: Goodreads is retiring the API after December 2020)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
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
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
      <CardActionArea href='https://mighty-ridge-79565.herokuapp.com/?id=5fd6d24eed4d956cd89d1166' target='_blank'> 
        <CardMedia
          component="img"
          alt="Workout Tracker"
          height="140"
          image="/assets/projects/workout-tracker.png"
          title="Workout Tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Workout Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Workout Tracker app is able to view, create and track daily workouts. Multiple exercises can be logged in a given day. Then the exercises can be tracked by name, type, weight, sets, reps, duration of exercise and distance traveled if it is a cardio exercise. The app uses a Mongo database with a Mongoose schema and handles routes with Express.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'center' }}>
      <Button size="small" color="primary" href='https://mighty-ridge-79565.herokuapp.com/?id=5fd6d24eed4d956cd89d1166' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/workout-tracker' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
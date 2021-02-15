import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/quiz.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href='https://reddphoenix.github.io/code-quiz/' target='_blank'>
        <CardMedia
          component="img"
          alt="Javascript Code Quiz"
          height="140"
          image={image1}
          title="Javascript Code Quiz"
          className="image-border"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Code Quiz
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          JavaScript quiz app with a countdown timer and point system based on correct answers. Correct answers have been assigned a 25 pt score. When timer runs to 0, points will stop counting and app will reload with next button click. Score will be saved to local storage and will be retrieved after the first game that is played.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'center' }}>
      <Button size="small" color="primary" href='https://reddphoenix.github.io/code-quiz/' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/code-quiz' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
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
      <CardActionArea href='https://blooming-cliffs-45969.herokuapp.com/' target='_blank'>
        <CardMedia
          component="img"
          alt="Book vs Movie"
          height="140"
          image="/assets/projects/employee-demo.gif"
          title="Book vs Movie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Budget Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Command Line Application used to generate a software engineering team with user input. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. Unit tests are used to verify individual team positions. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. (Must be installed locally)

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'center' }}>
      <Button size="small" color="primary" href='https://blooming-cliffs-45969.herokuapp.com/' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/template-engine-employee-summary' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
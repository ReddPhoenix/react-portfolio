import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/budget-demo.png';

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
          alt="Budget Tracker"
          height="140"
          image={image1}
          title="Budget Tracker"
          className="image-border"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Budget Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Budget tracking app that allows the user to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they populate the total when brought back online.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'center' }}>
      <Button size="small" color="primary" href='https://blooming-cliffs-45969.herokuapp.com/' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/budget-tracker-online-offline-capable' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
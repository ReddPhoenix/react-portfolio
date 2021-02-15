import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/eat-da-burger.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href='https://boiling-taiga-72789.herokuapp.com/index' target='_blank'>
        <CardMedia
          component="img"
          alt="Eat-Da-Burger!"
          height="140"
          image={image1}
          title="Eat-Da-Burger!"
          className="image-border"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Eat-Da-Burger!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Eat-Da-Burger! app was created using an MVC design pattern with MySQL, Node, Express, Handlebars, Bulma CSS and an ORM.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'center' }}>
      <Button size="small" color="primary" href='https://boiling-taiga-72789.herokuapp.com/index' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/eat-da-burger' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
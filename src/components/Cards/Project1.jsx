import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/taskably.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href='https://arcane-wildwood-67330.herokuapp.com/' target='_blank'>

        <CardMedia
          component="img"
          alt="Project 1"
          height="140"
          image={image1}
          title="Taskably"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Taskably
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A program to manage products, orders, employees, and customers.
            <br></br>
            <br></br>
            <u>Login Credentials</u>
            <br></br>USERNAME: task@b.ly
            <br></br>PASSWORD: t
            <br></br>
            <br></br>

Awarded Certificate of Recognition for
            <br />
            <a href='https://raw.githubusercontent.com/ReddPhoenix/react-portfolio/main/src/assets/projects/Best_UIUX_taskably.png' target='_blank' rel='noreferrer'>Best UI/UX</a>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'center' }}>
        <Button size="small" color="primary" href='https://arcane-wildwood-67330.herokuapp.com/' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/taskably' target='_blank' >
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/taskably2.gif';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href='https://arcane-sands-96523.herokuapp.com' target='_blank'>
        <CardMedia
          component="img"
          alt="Taskably 2.0"
          height="140"
          image={image1}
          title="Taskably 2.0"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Taskably 2.0
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            React app that uses role authentication to manage roles such as customers and employees.
            <br />
            <br />
            <u>Login Credentials</u>

            <br /> TECHNICIAN: tech@email.com
            <br /> PASSWORD: 123456
            <br />
            <br /> CUSTOMER: bfarrall1@booking.com
            <br /> PASSWORD: 123456


          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button size="small" color="primary" href='https://arcane-sands-96523.herokuapp.com' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/taskably-2.0' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
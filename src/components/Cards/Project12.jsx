import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/employee-tracker.gif';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href='https://github.com/ReddPhoenix/employee-tracker' target='_blank'>
        <CardMedia
          component="img"
          alt="Employee Tracker"
          height="140"
          image={image1}
          title="Employee Tracker"
          className="image-border"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Employee Tracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Command Line Application application that allows a user to maintain a company roster. The application is able to add departments/roles/employees, view departments/roles/employees, and update employee roles. App uses MySQL database to create, store and update company roster. (Must be installed locally)

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        {/* App must be installed locally */}
      {/* <Button size="small" color="primary" href='' target='_blank'>
          App
        </Button> */}
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/employee-tracker' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
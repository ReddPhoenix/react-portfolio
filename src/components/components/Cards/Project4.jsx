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
      <CardActionArea href='https://reddphoenix.github.io/employee-directory/' target='_blank'>
        <CardMedia
          component="img"
          alt="Employee Directory"
          height="140"
          image="/assets/projects/employee-directory.png"
          title="Employee Directory"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Employee Directory
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This app was created using React. The Employee Directory allows a user to sort an employee database in ascending/descending order by clicking on any of the column headings. The search function filters data according to user input across all columns. Employee data was created using the Mockaroo API.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" href='https://reddphoenix.github.io/employee-directory/' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/employee-directory' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
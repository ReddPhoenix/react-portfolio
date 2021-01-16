import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/portfolio-demo.gif';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href='https://reddphoenix.github.io/portfolio' target='_blank'>
        <CardMedia
          component="img"
          alt="Previous Portfolio"
          height="140"
          image={image1}
          title="Previous Portfolio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Previous Portfolio
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Responsive website developed to reflect experience, projects, and contact information. Developed using Bulma & Bootstrap code.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', justifyContent: 'center' }}>
      <Button size="small" color="primary" href='https://reddphoenix.github.io/portfolio/' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/portfolio' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
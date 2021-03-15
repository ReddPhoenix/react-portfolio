import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/ChatTest.gif';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href='https://slack-clone-a728f.web.app' target='_blank'>
        <CardMedia
          component="img"
          alt="React Slack Clone"
          height="140"
          image={image1}
          title="React Slack Clone"
          className="image-border"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          React Slack Clone
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          DESCRIPTION

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        {/* App must be installed locally */}
      <Button size="small" color="primary" href='https://slack-clone-a728f.web.app/' target='_blank'>
          App
        </Button>
        <Button size="small" color="primary" href='https://github.com/ReddPhoenix/slack-clone' target='_blank'>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}
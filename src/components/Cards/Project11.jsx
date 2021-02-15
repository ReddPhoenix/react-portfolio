import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../assets/projects/password-generator.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea href='https://reddphoenix.github.io/random-password-generator/' target='_blank'>
                <CardMedia
                    component="img"
                    alt="Password Generator"
                    height="140"
                    image={image1}
                    title="Password Generator"
                    className="image-border"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Password Generator
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Website that creates a random password based on user-specified criteria. Data supplied by user is validated to match password requirements.


          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="small" color="primary" href='https://reddphoenix.github.io/random-password-generator/' target='_blank'>
                    App
        </Button>
                <Button size="small" color="primary" href='https://github.com/ReddPhoenix/random-password-generator' target='_blank'>
                    GitHub Repository
        </Button>
            </CardActions>
        </Card>
    );
}
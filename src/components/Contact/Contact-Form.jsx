/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import emailjs from 'emailjs-com';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from 'avataaars';
import './Contact.css';
// import Profile from '../../assets/projects/Profile.png'

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('PortfolioEmail', 'template_ike1sjf', e.target, 'user_5SfU7CYtZg6Zb9JUGjQOV')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}



export default function Contact() {
    // const classes = useStyles();

    // for modal
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered" id='contact-container'>
                        <div className="columns is-8 is-variable ">
                            <div className="column is-two-thirds has-text-centered ">
                                {/* <img src={Profile} alt='Profile' width='220' /> */}
                                <Avatar
                                    avatarStyle='Circle'
                                    topType='ShortHairShortFlat'
                                    accessoriesType='Prescription01'
                                    hairColor='Black'
                                    facialHairType='BeardLight'
                                    facialHairColor='Black'
                                    clotheType='CollarSweater'
                                    clotheColor='Gray02'
                                    eyeType='Default'
                                    eyebrowType='DefaultNatural'
                                    mouthType='Smile'
                                    skinColor='Light'
                                />
                                <h1 className="title is-1">Contact Me</h1>
                                <p className="is-size-4">Have an idea? Request? Reach out to me!</p>
                                <div className="social-media has-text-centered ">

                                    <a href="https://www.linkedin.com/in/walter-guerrero-7494201a9/" target="_blank" className="button is-light is-large " id='contact-linkedin' rel="noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                    <a href="https://github.com/reddphoenix" target="_blank" className="button is-light is-large" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                                </div>
                            </div>

                            <div className="column is-one-third has-text-left" >
                                <form onSubmit={sendEmail}>
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control">
                                            <input className="input is-medium" type="text" label='name' name='from_name' />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input className="input is-medium" type="text" label='Email' name='email' />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Message</label>
                                        <div className="control">
                                            <textarea className="textarea is-medium" label='Message' name='message'  ></textarea>
                                        </div>
                                    </div>
                                    <div className="control">
                                        <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium" onClick={handleClickOpen}>Send Message</button>
                                    </div>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">{"Your message has been sent!"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                <p>Thank you for reaching out to me.</p>
                                            </DialogContentText>
                                        </DialogContent>
                                    </Dialog>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

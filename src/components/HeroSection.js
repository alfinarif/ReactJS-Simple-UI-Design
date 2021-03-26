import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Container, Grid} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: 345,
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        justify: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Container>

        <Grid container spacing={7}>

            <Grid item xs={4}>

                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYXpgpyOcjwEpMCgT7HcjBYwXbnavNYiu1g&usqp=CAU"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Python Management Project
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                শপ ম্যানেজমেন্ট সিস্টেম একটি ডেস্কটপ অ্যাপ্লিকেশন যা সমস্ত লেনদেনের উপর নজর রাখে এবং সমস্ত ক্রয়কৃত সামগ্রীর জন্য একটি বিল উত্পন্ন করে। এই আকর্ষণীয় প্রকল্পটি বিকাশের জন্য আমরা Python ব্যবহার করব..
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Enroll Now
                            </Button>
                            <Button size="small" color="primary">
                                Free Classes
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>

            </Grid>


            <Grid item xs={4}>

                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://lh3.googleusercontent.com/proxy/WcXDs2cEtSXuyRxI6RNhFl6E9fDUyL4tkCHwN-Rx7VLEmggvnlRhBEbGuMqZEQzd8o5oS4KUYLum8eqg8JqhcTsJMblu7Qz0z6OelcRT-VJ4EJRAXI-16YxtvVctaNOEh40"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Django Tutorial For Beginner
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    আজ আমি জ্যাঙ্গোর মূলসূত্রগুলি সম্পর্কে একটি নতুন টিউটোরিয়াল সিরিজ শুরু করছি। জ্যাঙ্গো শিখতে শুরু করার জন্য এটি সম্পূর্ণ শিক্ষানবিশ guide উপাদানটি সাতটি ভাগে বিভক্ত। আমরা ইনস্টলেশন, বিকাশের পরিবেশ..
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Enroll Now
                            </Button>
                            <Button size="small" color="primary">
                                Free Classes
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>

            </Grid>



            <Grid item xs={4}>

                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://www.amurta.com/wp-content/uploads/2021/02/Why-Do-Enterprises-Need-Reference-Data-Management-1-300x200.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Android App Development
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    যারা অ্যাপ ডেভেলপমেন্ট শিখতে চায় তাদের প্রতি আমার পরামর্শ হচ্ছে থার্ড ইয়ারের আগে এটা শুরু করো না। থার্ড ইয়ারের শেষের দিকে শুরু করতে পার। এর আগ পর্যন্ত প্রোগ্রামিং এর বিভিন্ন ট্রিক্সগুলো শিখো।
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Enroll Now
                            </Button>
                            <Button size="small" color="primary">
                                Free Classes
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>

            </Grid>


            <Grid item xs={4}>

                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://www.amurta.com/wp-content/uploads/2021/02/Why-Do-Enterprises-Need-Reference-Data-Management-1-300x200.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Android App Development
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    যারা অ্যাপ ডেভেলপমেন্ট শিখতে চায় তাদের প্রতি আমার পরামর্শ হচ্ছে থার্ড ইয়ারের আগে এটা শুরু করো না। থার্ড ইয়ারের শেষের দিকে শুরু করতে পার। এর আগ পর্যন্ত প্রোগ্রামিং এর বিভিন্ন ট্রিক্সগুলো শিখো।
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Enroll Now
                            </Button>
                            <Button size="small" color="primary">
                                Free Classes
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>

            </Grid>



            <Grid item xs={4}>

                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://www.amurta.com/wp-content/uploads/2021/02/Why-Do-Enterprises-Need-Reference-Data-Management-1-300x200.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Android App Development
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    যারা অ্যাপ ডেভেলপমেন্ট শিখতে চায় তাদের প্রতি আমার পরামর্শ হচ্ছে থার্ড ইয়ারের আগে এটা শুরু করো না। থার্ড ইয়ারের শেষের দিকে শুরু করতে পার। এর আগ পর্যন্ত প্রোগ্রামিং এর বিভিন্ন ট্রিক্সগুলো শিখো।
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Enroll Now
                            </Button>
                            <Button size="small" color="primary">
                                Free Classes
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>

            </Grid>



            <Grid item xs={4}>

                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="https://www.amurta.com/wp-content/uploads/2021/02/Why-Do-Enterprises-Need-Reference-Data-Management-1-300x200.png"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Android App Development
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    যারা অ্যাপ ডেভেলপমেন্ট শিখতে চায় তাদের প্রতি আমার পরামর্শ হচ্ছে থার্ড ইয়ারের আগে এটা শুরু করো না। থার্ড ইয়ারের শেষের দিকে শুরু করতে পার। এর আগ পর্যন্ত প্রোগ্রামিং এর বিভিন্ন ট্রিক্সগুলো শিখো।
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Enroll Now
                            </Button>
                            <Button size="small" color="primary">
                                Free Classes
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>

            </Grid>


        </Grid>

        </Container>
    );
}

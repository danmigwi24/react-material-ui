import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(5)
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]:{
        height:150
    }
  }
}));

const Posts = () => {
  const postStyles = useStyles();
  return (
    <Card className={postStyles.card}>
      <CardActionArea>
        <CardMedia
          className={postStyles.media}
          image="https://d2lo9qrcc42lm4.cloudfront.net/Images/News/_contentLarge/Main-girls-out-of-school.jpg?mtime=20170426205135"
          title="My Post 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            13 reasons why girls are not in school{" "}
          </Typography>
          <Typography variant="body2">
            Millions of girls aren't at school today. They are shut out of
            education because of discrimination, poverty, emergencies and
            culture. These girls have the same hopes and dreams as boys. They
            want to learn, fulfil their potential, work and help their families
            and communities. But too often they are treated as second-class.
            They are exploited, abused and simply disregarded in many countries.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" size="small">
          Share
        </Button>
       <Button color="primary" size="small">
          Learn More.. 
        </Button>
      </CardActions>
    </Card>
  );
};

export default Posts;

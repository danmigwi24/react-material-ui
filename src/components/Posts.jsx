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
    [theme.breakpoints.down("sm")]: {
      height: 150
    }
  }
}));

const Posts = ({ postTitle, postDescription, imageUrl }) => {
  const postStyles = useStyles();
  return (
    <Card className={postStyles.card}>
      <CardActionArea>
        <CardMedia
          className={postStyles.media}
          image={imageUrl}
          title={postTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {postTitle}
          </Typography>
          <Typography variant="body2">
            {postDescription}
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

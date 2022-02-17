import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import Posts from "./Posts";
import postDataList from "../data/post-data.json";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(10)
  }
}));

const Feed = ({ feedTitle }) => {
  const classes = useStyles();

  // const getPosts = postList => {
  //   return <Posts {...postList} />;
  // };

  return (
    <Container className={classes.container}>
      <Typography gutterBottom variant="h5">
        {feedTitle}
      </Typography>
      {/* {postDataList.map(postList=>getPosts(postList))} */}
      {postDataList.map(postList =>
        <Posts
          postTitle={postList.postTitle}
          postDescription={postList.postDescription}
          imageUrl={postList.imageUrl}
        />
      )}
    </Container>
  );
};

export default Feed;

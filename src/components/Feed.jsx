import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import Posts from "./Posts";
import postDataList from "../data/post-data.json";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}));

const Feed = ({feedTitle}) => {
  const feedStyles = useStyles();

  const getPosts = postList => {
    return <Posts {...postList}/>;
  };

  return (
    <Container className={feedStyles.container}>
         <Typography gutterBottom variant="h5">
          {feedTitle}
          </Typography>
        {postDataList.map(postItem=>getPosts(postItem))}
    </Container>
  );
};

export default Feed;

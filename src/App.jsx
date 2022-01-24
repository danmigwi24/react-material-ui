import { Grid, makeStyles } from "@material-ui/core";
import LeftBar from "./components/LeftBar";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import AddPost from "./components/AddPost";

const useStyles = makeStyles(theme => ({
  rightBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

function App() {
  const appStyles = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container className={appStyles.container}>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed feedTitle="13 reasons why girls are not in school" />
        </Grid>
        <Grid item sm={3} className={appStyles.rightBar}>
          <RightBar />
        </Grid>
      </Grid>
      <AddPost />
    </div>
  );
}

export default App;

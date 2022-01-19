import { Button, Grid, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import LeftBar from "./components/LeftBar";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

const useStyles = makeStyles(theme => ({
  // container:{
  //   paddingTop:"80px"
  // }
}));

function App() {
  const appStyles = useStyles();
  return (
    <div>
<NavBar/>
<Grid container className={appStyles.container}>
  <Grid item sm={2}>
    <LeftBar/>
  </Grid>
  <Grid item sm={7}>
    <Feed/>
  </Grid>
  <Grid item sm={3}>
    <RightBar/>
  </Grid>

</Grid>
    </div>
  );
}

export default App;

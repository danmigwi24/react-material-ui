import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    container:{
        paddingTop:theme.spacing(10)
      },
      item:{
          display:"flex",
          alignItems:"center",
          marginBottom:theme.spacing(2)
      }
}));

const LeftBar = () => {
  const leftBarStyles = useStyles();
  return (
    <Container className={leftBarStyles.container}>
      <div className={leftBarStyles.item}>
        <Home />
        <Typography className={leftBarStyles.text}>Home Page</Typography>
      </div>
      <div className={leftBarStyles.item}>
        <Home />
        <Typography className={leftBarStyles.text}>Home Page</Typography>
      </div>
      <div className={leftBarStyles.item}>
        <Home />
        <Typography className={leftBarStyles.text}>Home Page</Typography>
      </div>
    </Container>
  );
};

export default LeftBar;

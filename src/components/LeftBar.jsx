import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Home,
  List,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  TabletMac
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    position:"sticky",
    top:0,
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7"
    }
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer"
    }
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    fontWeight: 500
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px"
    }
  }
}));

const LeftBar = () => {
  const leftBarStyles = useStyles();
  return (
    <Container className={leftBarStyles.container}>
      <div className={leftBarStyles.item}>
        <Home className={leftBarStyles.icon} />
        <Typography className={leftBarStyles.text}>Home Page</Typography>
      </div>
      <div className={leftBarStyles.item}>
        <Person className={leftBarStyles.icon} />
        <Typography className={leftBarStyles.text}>Person</Typography>
      </div>
      <div className={leftBarStyles.item}>
        <List className={leftBarStyles.icon} />
        <Typography className={leftBarStyles.text}>List</Typography>
      </div>
      <div className={leftBarStyles.item}>
        <PhotoCamera className={leftBarStyles.icon} />
        <Typography className={leftBarStyles.text}>Camera</Typography>
      </div>
      <div className={leftBarStyles.item}>
        <PlayCircleOutline className={leftBarStyles.icon} />
        <Typography className={leftBarStyles.text}>Video</Typography>
      </div>
      <div className={leftBarStyles.item}>
        <TabletMac className={leftBarStyles.icon} />
        <Typography className={leftBarStyles.text}>Apps</Typography>
      </div>
    </Container>
  );
};

export default LeftBar;

import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Button,
  InputBase,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  logoSM: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: props => (props.openSearch ? "flex" : "none"),
      width: "70%"
    }
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },

  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  cancelOpenSearch: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  icons: {
    alignItems: "center",
    display: props => (props.openSearch ? "none" : "flex")
  },
  badge: {
    marginRight: theme.spacing(2)
  }
}));

const NavBar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const classStyles = useStyles({ openSearch });
  return (
    <AppBar position="fixed">
      <Toolbar className={classStyles.toolbar}>
        <Typography variant="h6" className={classStyles.logoLg}>
          Material UI
        </Typography>
        <Typography variant="h6" className={classStyles.logoSM}>
          MUI
        </Typography>
        <div className={classStyles.search}>
          <Search />
          <InputBase className={classStyles.input} placeholder="Search" />
          <Cancel
            className={classStyles.cancelOpenSearch}
            onClick={() => setOpenSearch(false)}
          />
        </div>
        <div className={classStyles.icons}>
          <Search
            className={classStyles.searchButton}
            onClick={() => setOpenSearch(true)}
          />
          <Badge
            badgeContent={4}
            color="secondary"
            className={classStyles.badge}
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={5}
            color="secondary"
            className={classStyles.badge}
          >
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="/assets/profilepicture.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

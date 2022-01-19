import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  button: {
    // color: "white",
    // backgroundColor: theme.palette.primary.main,
    ...theme.myButton
    
  }
}));

function LearningButtons() {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        startIcon={<Person />}
      >
        Hello Dan
      </Button>
      <br />
      <br />

      <Button
        variant="contained"
        size="small"
        startIcon={<Person />}
        className={classes.button}
      >
        Hello Dan
      </Button>
    </div>
  );
}

export default LearningButtons;

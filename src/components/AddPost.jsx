import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";
const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
      height: "50vh"
    }
  },
  textfield: { width: "100%" },
  itemInForm: { marginBottom: theme.spacing(3), marginTop: theme.spacing(2) }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddPost = () => {
  const addPostStyles = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Add Post" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={addPostStyles.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={addPostStyles.container}>
          <form
            className={addPostStyles.form}
            autoComplete="off"
            onSubmit={e => e.preventDefault()}
          >
            <div className={addPostStyles.itemInForm}>
              <TextField
                id="stardard-basic"
                label="Post Title"
                size="small"
                className={addPostStyles.textfield}
              />
            </div>
            <div className={addPostStyles.itemInForm}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
                label="Description"
                size="small"
                className={addPostStyles.textfield}
              />
            </div>

            <div className={addPostStyles.itemInForm}>
              <TextField
                select
                label="visibility"
                value="Public"
                className={addPostStyles.textfield}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="private">EveryBody</MenuItem>
              </TextField>
            </div>

            <div className={addPostStyles.itemInForm}>
              <FormLabel component="legend">Who can comment</FormLabel>
              <RadioGroup
              // aria-label="gender"
              // name="gender1"
              // value={whoComment}
              // onChange={e => setWhoComment(e.target.value)}
              >
                <FormControlLabel
                  value="EveryBody"
                  control={<Radio />}
                  label="EveryBody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Me Only"
                  control={<Radio />}
                  label="Me Only"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>

            <div className={addPostStyles.itemInForm}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOpenAlert(true)}
                style={{ marginRight: 20 }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>

      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </div>
  );
};

export default AddPost;

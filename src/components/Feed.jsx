import { Button, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container:{
        paddingTop:theme.spacing(10)
      }
}));

const Feed = () => {
    const feedStyles=useStyles()
    return (
        <Container className={feedStyles.container}>
          <div>
           Feeds
        </div>  
        </Container>
    )
}

export default Feed

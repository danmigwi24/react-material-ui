import { Button, Container, makeStyles } from "@material-ui/core";
import Posts from "./Posts";

const useStyles = makeStyles(theme => ({
    container:{
        paddingTop:theme.spacing(10)
      }
}));

const RightBar = () => {
    const feedStyles=useStyles()
    return (
        <Container className={feedStyles.container}>
        <Posts/> 
        <Posts/> 
        <Posts/> 
        </Container>
    )
}

export default RightBar

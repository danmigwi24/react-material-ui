import { Button, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container:{
        paddingTop:theme.spacing(10)
      }
}));

const RightBar = () => {
    const rightBarStyles=useStyles()
    return (
        <Container className={rightBarStyles.container}>
          <div>
            Right Bar
        </div>  
        </Container>
        
    )
}

export default RightBar

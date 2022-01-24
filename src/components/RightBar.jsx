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
        <Posts
        postTitle=" 13 reasons why girls are not in school"
        postDescription="  Millions of girls aren't at school today. They are shut out of
            education because of discrimination, poverty, emergencies and
            culture. These girls have the same hopes and dreams as boys. They
            want to learn, fulfil their potential, work and help their families
            and communities. But too often they are treated as second-class.
            They are exploited, abused and simply disregarded in many countries."
        imageUrl="https://d2lo9qrcc42lm4.cloudfront.net/Images/News/_contentLarge/Main-girls-out-of-school.jpg?mtime=20170426205135"
      />
        </Container>
    )
}

export default RightBar

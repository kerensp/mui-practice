import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";



export default function NewCard() {
  return(
    <Card sx={{ transition: "0.2s", "&:hover": {transform: "scale(1.05)"}}}>
      <CardActionArea>
        <CardMedia 
          component="img" 
          image="https://via.placeholder.com/1000x200" 
          height="200"
          alt="Card Image"
        />
        <CardContent>
          <Typography variant="h5">
            Card Title
          </Typography>
          <Typography variant="body2" component='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas eligendi cupiditate id aspernatur ipsam ipsum repellendus itaque consequuntur officiis. Aliquid, repudiandae. Ad voluptatibus unde sint voluptatem quaerat eligendi blanditiis?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button variant="contained"> Add </Button>
          <Button color="error"> Remove </Button>
      </CardActions>
    </Card>
  );
}
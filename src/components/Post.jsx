import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Fulano"
        subheader="Julio, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://destinonea.com/download/multimedia.normal.8a4027e7b1389eb1.6d62656a755f717565736f5f6e6f726d616c2e6a7067.jpg"
        alt="mbeju"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        ¡Lo que faltaba! Ahora dicen que el mbeju es argentino.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { eliminar } from "../../services/obra";


const HistoryCard = ({ user, loading }) => {

const eliminarhistory=(id) =>{

  eliminar(id);
  const valor = loading.loading ? false: true;
  loading.setloading(valor);

}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={user.imagen}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {user.titulo}
        </Typography>
        <Typography gutterBottom variant="body2">
          {user.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.sinopsis}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Editar</Button>
        <Button size="small" color="secondary"  
        onClick={() => eliminarhistory(user._id)}>Eliminar</Button>
      </CardActions>
    </Card>
  );
};

export default HistoryCard;

import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { HistoryCard } from "../../components";
import { list } from "../../services/obra";

const Home = () => {
  // paso1 declar una funcion donde debo almacenar a los usuario que traiga de mi API
  const [users, setUsers] = useState([]);

  // paso2 invocar a la funcion que trae de mi API llamada "list"
  const fetchUsers = async () => {
    const response = await list();
    console.log("data en vista",response);
    setUsers(response);
   
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        {users &&
          users.map((user) => (
            <Grid item xs={12} sm={6}>
              <HistoryCard user={user} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;

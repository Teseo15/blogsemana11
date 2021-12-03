import { useState, useEffect} from "react";
import { Container, Grid,TextField,Box } from "@mui/material";
import { HistoryCard } from "../../components";
import { list } from "../../services/obra";
import { Search } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
const Home = () => {
  // paso1 declar una funcion donde debo almacenar a los usuario que traiga de mi API
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // paso2 invocar a la funcion que trae de mi API llamada "list"

  //PARA BUSCAR

  const getSearchTerm = (e) =>{
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };
  var term;
  const searchHandler = () =>{};


  const fetchUsers = async () => {
    const response = await list();
    setUsers(response);
   
  };
  const [loading,setloading]= useState(false);
  useEffect(() => {
    fetchUsers();
    
  },[loading]);


  return (
    <Container maxWidth="xl">
        <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Busqueda de Historias" variant="outlined"
            value={term}
            onChange={getSearchTerm}
            InputProps={{
              startAdornment: <InputAdornment position="start">
               
                <IconButton>
                <  Search />
                </IconButton>
                </InputAdornment>
            }} />
            
      </Box>
   <h1></h1>
      <Grid container spacing={3}>
        {users &&
          users.filter((user)=>{
            if(searchTerm ==""){
              return user
            }else if(user.titulo.toLowerCase().includes(searchTerm.toLowerCase())){
              return user 
            }
            
          }).map((user) => (
            <Grid item xs={12} sm={6}>
              
              < HistoryCard 
              user={user} 
              loading = {{loading,setloading}}
              term = {searchTerm}
              searchKeyword={searchHandler}
               />
              
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Home;

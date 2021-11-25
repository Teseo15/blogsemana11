import { useState } from "react";

import { Button, Container, Grid, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { login } from "../../services/auth";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: true
  });
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };
  
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const handleSubmit = async() => {
    const response = await login(inputs);
    console.log(response); 
  };

  return (
    
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h1>Login</h1>
            <p><b>"</b>
              <i>Las pequeñas cosas y detalles son las que hacen la diferencia. Si sientes que vas muy lento o que lo que esperabas tener o hacer está tardando más de lo esperado, ¡mantén la calma! Lo importante es que no te detengas en luchar por lo que quieres.</i>
              <b>"</b>
            </p>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  onChange={handleChange}
                  name="email"
                  type="email"
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                     
                      <IconButton>
                      < EmailOutlinedIcon/>
                      </IconButton>
                      </InputAdornment>
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Iniciar Sesión
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} >

              <img 
              width="610"
              height ="540"
              
              src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>

             

          </Grid>
        </Grid>
      </Container>
    
  );
};

export default Login;


import { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import Drawer from "../../components/Drawer";

const Contact = () => {
  // * Teniendo un solo state para todos mis inputs
  // * paso 1: Definit los valores iniciales de mis inputs
  // * en un objecto
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  // * Crear una funcion que me permita actualizar los valores de
  // * mis inputs esta debe recibir el evento de los inputs
  const handleInputChange = (e) => {
    // aca recibo el evento el cual contiene el name y el value
    // el name es un atributo del input
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // e -> cuando es un submit puedo usar preventDefault
    e.preventDefault();
    console.log("name", inputs.name);
    console.log("email", inputs.email);
  };

  return (
    <>
      <Drawer>
        <Container maxWidth="xl">
          <div>
            <h1>Hola</h1>
          </div>
        </Container>
      </Drawer>
    </>
  );
};

export default Contact;

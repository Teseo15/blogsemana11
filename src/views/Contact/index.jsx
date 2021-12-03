import { useState } from "react";
import { Container } from "@mui/material";


const Contact = () => {
  // * Teniendo un solo state para todos mis inputs
  // * paso 1: Definit los valores iniciales de mis inputs
  // * en un objecto
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  return (
    <>
      <Container maxWidth="xl">
        <div>
          <h1>Hola</h1>
        </div>
      </Container>
    </>
  );
};

export default Contact;
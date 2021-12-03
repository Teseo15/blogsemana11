import { useState } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { enviar, uploadImage } from "../../services/obra";
import './index.css';

import {  useNavigate , useLocation } from 'react-router-dom';
const Book = () => {

  const history =useNavigate();
  const location = useLocation();
  const previusObjectURL = location.state?.from;

  const [enviado, cambiarEnviado] = useState(false);

  const [imageUrl, setImageUrl] = useState("");

  const [initValues, setInitValues] = useState({
    titulo: '',
    author: '',
    imagen: '',
    sinopsis: '',
    publicación: '',
  })

  const handleUploadImage = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const response = await uploadImage(formData)
    setImageUrl(response.secure_url)
  }

  return (
    <>
      <Formik
        initialValues={initValues}

        onSubmit={(valores) => {
          valores.imagen = imageUrl;
          console.log("Formulario enviado", valores);
          enviar(valores);
          cambiarEnviado(true);
          setTimeout(() => cambiarEnviado(false), 5500);
          history("/");
        }}

        validate={(valores) => {

          let errores = {};
          if (!valores.titulo) {
            errores.titulo = "El titulos esta vacio"
          }
          return errores;
        }}
      >
        {/*({values, errors, handleSubmit, handleChange, handleBlur})=> (*/}
        {({ errors, values, handleChange }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="titulo">Titulo</label>
              <Field
                type="text"
                id="titulo"
                name="titulo"
                placeholder="Titulo">

              </Field>
              {errors.titulo && <div className="error">{errors.titulo}</div>}
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <Field
                type="text"
                id="author"
                name="author"
                placeholder="Author">
              </Field>
            </div>
            <div>
              <label htmlFor="resumen">resumen</label>
              <Field
                as="textarea"
                type="textarea"
                id="resumen"
                name="sinopsis"
                placeholder="Resumen">
              </Field>
            </div>
            <div>
              <label htmlFor="publicación">Publicación</label>
              <Field
                type="text"
                id="publicación"
                name="publicación"
                placeholder="fecha de publicación">
              </Field>
            </div>
            <div>
              <label htmlFor="imagen2">imagen</label>
              <input
                as=""
                type="file"
                id="imagen2"
                name="imagen2"
                placeholder="imagen"
                onChange={handleUploadImage}
              >
              </input>
            </div>
            <button type="submit">Enviar</button>
            {enviado && <p className="exito">Formulario enviado con exito!</p>}
          </Form>
        )}

      </Formik>

    </>
  );
};

export default Book;
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";

const Home = () => {
  const [count, setCount] = useState(0);

  // Ahora vamos a modificar el esta de count
  const handleSumCount = (e) => {
    console.log("evento", e);
    setCount(count + 1);
  };

  const handleLessCount = () => setCount(count - 1);

  useEffect(() => {
    console.log("useEffect");
    // Esto evita que se vuelva un bucle infinito
    document.title = `Click en la pagina ${count}`;
    // Quiero que esto se ejecute cada vez que count cambie
    // Cada vez que count cambie este useEffect se ejecutara
  }, [count]);

  return (
    <div>
      <NavBar />
      <h1>Mi primera pagina con React</h1>
      <h2>Numero de click {count}</h2>
      <button onClick={handleSumCount}>Sumar</button>
      {/* Esto podemos usarlo cuando necesitemos pasarle paramtros */}
      {/* Cuando este tipo de invocacion no se ejecuta al iniciar el render */}
      <button onClick={(e) => handleSumCount(e)}>Sumarrrr</button>
      <button onClick={handleLessCount}>Restar</button>
    </div>
  );
};

export default Home;

# useState

- Es una funcion de React, la cual permite maneja el estados de las variable.

Ojo:
useState siempre va a ser iniciado con dos cosas

- 1. variable contenedora
- 2. funcion para actualizar el valor la variable contenedora

```jsx
const [count, setCount] = useState(0);
```

Para poder modificar el valor de una variable debo usar su funcion set

```jsx
const hanldeChangeValue = () => setCount(1);
```

Llamando a la funcion `setCount()` y pasandole un valor es como actualizo el valor de `count`.

## Inputs

Los input tienen el evento `onChange`, basicamente este evento detecta cada vez que el valor de input cambia

```html
<input name="email" type="email" onChange="{handleInput}" />
```

```jsx
const [email, setEmail] = useState("");

const handleInput = (event) => setEmail(event.target.value);
```

Ojo: El targe `event.target.value ` es el valior del input

## Inputs multiples

Sabemos que los input tiene la propiedad `name`, es usada en muchos lenguajes de back para poder obtner el valor de cada input

Ejemplos en otro lenguajes

- Python

```python
request.form['email']
```

- PHP

```php
$request->get('email')
```

- JS - Node

```js
req.body.email;
```

El `name` viene a ser el identificador de cada input
En `React` tambien podemos usarlo para hacer una funcion que basada en el nombre actualice el estado

- Para eso debo crear primero un estado que contenga todos los valores de mis inputs

Supongamos que tenemos un formualario con nombre, correo y password

```jsx
const [inputs, setInput] = useState({
  nombre: "",
  correo: "",
  password: "",
});
```

```html
<input name="nombre" type="text" value="{inputs.nombre}" />

<input name="correo" type="text" value="{inputs.correo}" />

<input name="password" type="text" value="{inputs.password}" />
```

### Ahora debo crear una funcion la cual se encargue de actualizar el valor de mis inputs

```jsx
const handleInputChange = (event) => {
  // como obtengo el nombre del input?
  // como cada input tiene un name, yo puedo acceder a este atravez de `event.target.name`
  const { name, value } = event.target;

  // Para poder actualizar el estados de mis inputs y que este solo actualice al que nombre que acabo recibir de pasamer a mi set un ...inputs
  // ...inputs -> viene el objeto con el valor actual
  setInput({
    ...inputs,
    [name]: value,
  });
};
```

- Ahora debo modificar mi html con lo siguiente

```html
<input
  name="nombre"
  type="text"
  value="{inputs.nombre}"
  onChange="{handleInputChange}"
/>

<input
  name="correo"
  type="text"
  value="{inputs.correo}"
  onChange="{handleInputChange}"
/>

<input
  name="password"
  type="text"
  value="{inputs.password}"
  onChange="{handleInputChange}"
/>
```

Podemos ver que todos los inputs reciben la misma funcion en el `onChange`

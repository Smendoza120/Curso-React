import "./App.css";
import Boton from "./components/Boton";
import { MiBotonStateful } from "./components/MiBotonStateful";
import { MyComponent } from "./components/MyComponent";
import { Saludos } from "./components/Saludos";

function App() {
  return (
    <>
      <h1>Bienvenido a mi app en react</h1>

      <MyButton />
      <Saludos />
      <MiBotonStateful onClic={() => console.log("Click en el boton")} > 
        Haz click aqui
      </MiBotonStateful>

      <Boton texto="Boton" onClick={()=> console.log("Click en el boton")}/>

      {/* llamando a un component */}
      <MyComponent name="Harold" anios={26}/>
    </>
  );
}

// Componente de tipo funcion
function MyButton() {
  return (
    <>
      <button>Esto es un boton</button>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useFormInput } from "./userFormInput";
import PageStyles from "./PageStyles";
import StyledInputButton from "./StyledInputButton";
import Navigation from "./components/Navigation";

const ExampleStyledInputButton: React.FC = () => {
  //* Variables
  const [count, setCount] = useState<number>(0); //* Valor inicial
  const nameInput = useFormInput("");

  useEffect(() => {
    document.title = `click ${count} times`;
  }, [count]);

  return (
    <div>
      <PageStyles />
      <StyledInputButton />
      <Navigation />
      <div className="container">
        <p>Click {count} veces</p>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Presioname
        </button>

        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>

        <br />

        <input type="text" className="input-text" {...nameInput} />
        <p>Mi nombre es: {nameInput.value}</p>
      </div>
    </div>
  );
};

export default ExampleStyledInputButton;

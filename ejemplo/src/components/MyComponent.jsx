//* Trabajar con propiedades
//* Atributos de configuracion para cada componente
//* Componente donde le enviaremos las propiedades y cuando se va a renderizar en DOM

import { Component } from "react";

export class MyComponent extends Component {
  //* Operacion
  //* Cambios y varias cosas

  render() {
    return (
      <>
        <div>
          <p>
            Me llamo {this.props.name} y tengo {this.props.anios}
          </p>
        </div>
      </>
    );
  }
}

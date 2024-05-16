import { Component } from "react";

//* Componente con estado
//* mas utilizados encapsular en clases
//* Defino un estado y actualizo cada uno de los cambios que se den en los props (Propiedades)
//* de la clase o del objeto
export class MiBotonStateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        background: "blue",
        color: "white",
      },
    };
  }

  render() {
    return (
      <>
        <button {...this.props} style={this.state.styles}>
            {this.props.children}
        </button>
      </>
    );
  }
}

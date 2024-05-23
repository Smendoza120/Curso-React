import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ServicioProducto } from "../services/ServicioProducto";

const Datostabla = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ServicioProducto.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
};

export default Datostabla;

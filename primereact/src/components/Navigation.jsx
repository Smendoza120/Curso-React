//* Todo el menu de navegacion para la pagina web
import { Menubar } from "primereact/menubar";

const Navigation = () => {
  const navList = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        window.location.href = "/";
      },
    },
    {
      label: "About",
      icon: "pi pi-fw pi-file",
      command: () => {
        window.location.href = "/about";
      },
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-phone",
      command: () => {
        window.location.href = "/contact";
      },
    },
    {
      label: "DatosTabla",
      icon: "pi pi-fw pi-chart-bar",
      command: () => {
        window.location.href = "/datos-tabla";
      },
    },
  ];

  return (
    <>
      <div>
        <header>
          <nav>
            <ul>
              <Menubar model={navList} />
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navigation;

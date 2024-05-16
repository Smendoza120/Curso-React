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
  ];

  return (
    <>
      <header>
        <nav>
          <ul>
            <Menubar model={navList} />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;

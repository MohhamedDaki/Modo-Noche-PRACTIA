//Importamos los componentes necesarios
import type { Route } from "./+types/home";
import Card from "../components/card";
import UserPersona from "~/components/userpersona";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
//Declaramos el componente Home y le añadimos los componentes para crear la pagina, ademas dde los estilos
export default function Home() {
  return (
   <div>
  <Header />
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    
     <UserPersona imageSrc="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
     <Card 
          title="Bio" 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." 
        />
        <Card 
          title="Personalidad" 
          list={["Trabajador", "Inteligente", "Expresivo", "Reflexivo"]} 
        />
        <Card 
          title="Puntos de dolor" 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit..." 
        />
        <Card 
          title="Metas" 
          list={["Aprender nuevas habilidades", "Mejorar su bienestar", "Equilibrio trabajo-vida"]} 
        />

    </div>
    </div>
  );
}

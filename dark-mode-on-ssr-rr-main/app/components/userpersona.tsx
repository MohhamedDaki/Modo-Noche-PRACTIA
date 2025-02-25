//Declaramos el tipado
interface UserPersonaProps {
    imageSrc: string;
  }

//Declaramos el componente con la prop
const UserPersona: React.FC<UserPersonaProps> = ({ imageSrc }) => {
    return (
      <div className="bg-blue-100 dark:bg-blue-500 p-4 rounded-lg shadow md:col-span-1 row-span-2">
        <h1 className="text-2xl font-bold">User Persona</h1>
        
        
        {/* Imagen del usuario */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt="User Persona"
            className="w-full h-40 object-cover rounded-lg mt-4"
          />
        )}
  
        <h2 className="text-xl font-semibold mt-4">Detalles</h2>
        <ul className="mt-2 text-gray-400 dark:text-gray-900">
          <li><strong>Edad:</strong> 35</li>
          <li><strong>Estado:</strong> Casado, 2 hijos</li>
          <li><strong>Educación:</strong> Universidad de Calgary</li>
          <li><strong>Ubicación:</strong> Calgary, Alberta</li>
          <li><strong>Trabajo:</strong> Médico</li>
          <li><strong>Hobbies:</strong> Senderismo y baile</li>
        </ul>
      </div>
    );
  }
  
  export default UserPersona;
  

//Declaramos el tipado
interface CardProps {
    title: string;
    content?: string;
    list?: string[];
  }
  
//Declaramos el componente con las 3 props, y dependiendo de cuales saldra una lista o un parrafo
  const Card: React.FC<CardProps> = ({ title, content, list }) => {
    return (
      <div className="bg-blue-100 dark:bg-blue-500 p-4 rounded-lg shadow md:col-span-1">
        <h2 className="text-xl font-semibold">{title}</h2>
        {content && <p className="mt-2 text-gray-400 dark:text-gray-900">{content}</p>}
        {list && (
          <ul className="mt-2 text-gray-400 dark:text-gray-900">
            {list.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Card;
  
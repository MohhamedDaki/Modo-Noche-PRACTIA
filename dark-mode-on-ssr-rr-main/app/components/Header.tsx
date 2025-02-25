import ThemeToggle from "./ThemeToggle/ThemeToggle";

//Declaramos el header  y aplicamos estilos
export default function Header() {
  return (
    <header className="p-4  text-gray-900 dark:text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">UserPersona</h1>
      <ThemeToggle />
    </header>
  );
}
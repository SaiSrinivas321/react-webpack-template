import { Counter } from "./Counter";
import "./styles.css";
export const App = () => {
  return (
    <>
      <h1>React Typescript -{process.env.name}</h1>
      <Counter />
    </>
  );
};

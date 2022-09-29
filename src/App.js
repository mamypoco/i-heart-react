import Header from "./components/Header";
import HeartsList from "./components/HeartsList";
import "./App.css";
import { render } from "@testing-library/react";

const App = () => {
   return (
      <>
         <Header />
         <HeartsList />
      </>
   );
};

export default App;

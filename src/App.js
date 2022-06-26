import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Card from "./components/Main/Card";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Card />
    </div>
  );
};

export default App;

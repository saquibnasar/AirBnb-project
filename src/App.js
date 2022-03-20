import "./App.scss";
import Hero from "./component/Hero";
import Main from "./component/Main";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Main />
      </div>
    </>
  );
}

export default App;

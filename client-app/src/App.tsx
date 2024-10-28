import NavBar from "./components/NavBar";
import PageTitle from "./components/PageTitle";
import CardsContainer from './components/CardsContainer';
import ContactContainer from "./components/ContactContainer";
import './css/index.css'; 

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="body-container">
        <PageTitle title="Grow your business with affordable, easy-to-use software" />
        <CardsContainer />
        <ContactContainer />
      </div>
    </div>
  );
}

export default App;

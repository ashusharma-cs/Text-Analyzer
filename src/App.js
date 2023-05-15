import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


let name = "ASHU"


function App() {
  return (

    <div className="parent">

      <Navbar></Navbar>

      <div className="container my-3">
        <TextForm heading="ENTER THE TEXT TO ANALYZE"></TextForm>

      </div>

    </div>
  );
}

export default App;

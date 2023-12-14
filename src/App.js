import "bootswatch/dist/darkly/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import RecordList from "./components/RecordList";
import Create from "./components/Create";
import Edit from "./components/Edit";
import './styling.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RecordList />} />
        <Route exact path="/contacts/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
   
  );
}

export default App;

import {Routes, Route} from "react-router-dom";
import Container from "./Components/Container"
function App() {
  return (
    <>
    <div>
     
      <Routes>
        <Route path="/" element={ <Container/>} />
        <Route path="/userList/:Id" element={ <Container/>} />

        
      </Routes>
   
    </div>
</>
     
  );
}

export default App;

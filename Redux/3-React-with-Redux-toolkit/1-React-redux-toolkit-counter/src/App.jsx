import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Container from "./components/Container";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";

function App() {
  const privacy = useSelector((state) => state.privacy);

console.log(privacy+"privacy");

 
  return (
    <>
      <Container>
        <div className="card-body">
          <h5 className="card-title">Counter</h5>
          {privacy ? <PrivacyMessage /> : <DisplayCounter /> }
          <Controls></Controls>
          
        </div>
      </Container>
    </>
  );
}

export default App;

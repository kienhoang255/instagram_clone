import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Post from "./components/Post";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Container maxWidth="60em">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />

            {/* </Route>
          <Route path="/post">
          <Post/>
          </Route> */}
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

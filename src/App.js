import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { Container } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";

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

            <Route path="/post" element={<Post />} />

          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

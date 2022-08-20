import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Post from "./components/Post";
import Message from "./components/Message/Message";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Box bg="#fafafa" w="100%" h="100%">
        <Header />
        <Container maxWidth="62em">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} ></Route>
              <Route path="/post" element={<Post />}></Route>
              <Route path="/message" element={<Message />}></Route>
            </Routes>
          </BrowserRouter>

        </Container>
      </Box>
    </div>
  );
}

export default App;

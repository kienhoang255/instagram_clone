import { Container } from '@chakra-ui/react';
import Header from './Pages/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Message from './components/Message/Message';
import PersonalPage from './components/PersonalPage/PersonPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container maxWidth="62em">
          <Routes>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/profile" element={<PersonalPage />}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;

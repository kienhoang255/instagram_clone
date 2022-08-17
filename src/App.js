import "./App.css";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import Main from "./components/Main";

function App() {
  return (
    <ChakraProvider>
      <Box bgColor="#fafafa">
        <Container maxW="60em">
          <Main />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

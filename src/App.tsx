import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Cover from "./components/Cover/Cover";
import MainContent from "./components/MainContent";
import { Container } from "./styles";

function App() {
  const location = useLocation();
  return (
    <Container>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Cover />} />
          <Route path="/home" element={<MainContent />} />
        </Routes>
      </AnimatePresence>
    </Container>
  );
}

export default App;

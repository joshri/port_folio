import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Cover from "./components/Cover/Cover";
import MainContent from "./components/MainContent/MainContent";
import { Flex } from "./styles";

function App() {
  const location = useLocation();
  return (
    <Flex tall>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Cover />} />
          <Route path="/home" element={<MainContent />} />
        </Routes>
      </AnimatePresence>
    </Flex>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* add others as needed */}
      </Routes>
    </Router>
  );
}

export default App;


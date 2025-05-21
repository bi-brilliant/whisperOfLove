import React, { useState } from "react";
import Cover from "./components/Cover";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import MainContent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:slug" element={<WithCover />} />
      </Routes>
    </Router>
  );
};

// Bungkus MainContent dengan cover handler
const WithCover: React.FC = () => {
  const [showCover, setShowCover] = useState(true);

  return (
    <div className="w-full h-screen select-none">
      {showCover ? (
        <Cover onOpenInvitation={() => setShowCover(false)} />
      ) : (
        <MainContent />
      )}
    </div>
  );
};

export default App;

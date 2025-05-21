import React, { useEffect, useState } from "react";
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

const WithCover: React.FC = () => {
  const [showCover, setShowCover] = useState(true);
  const { slug } = useParams();
  const [coupleData, setCoupleData] = useState<any>(null);

  useEffect(() => {
    fetch(`/data/${slug}.json`)
      .then((res) => res.json())
      .then((data) => setCoupleData(data))
      .catch((err) => {
        console.error("Data not found:", err);
      });
  }, [slug]);

  if (!coupleData) return null; // bisa diganti dengan loading spinner

  return (
    <div className="w-full h-screen select-none">
      {showCover ? (
        <Cover
          onOpenInvitation={() => setShowCover(false)}
          bridegroom={coupleData.bridegroom.shortname}
          bride={coupleData.bride.shortname}
          date={coupleData.weddingShortDate}
        />
      ) : (
        <MainContent />
      )}
    </div>
  );
};

export default App;

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

  return (
    <div className="w-full h-screen select-none">
      {showCover ? (
        <Cover
          onOpenInvitation={() => setShowCover(false)}
          bridegroom={
            coupleData?.bridegroom?.shortname
              ? coupleData.bridegroom.shortname
              : "Aldi"
          }
          bride={
            coupleData?.bride?.shortname ? coupleData.bride.shortname : "Alin"
          }
          date={
            coupleData?.weddingShortDate
              ? coupleData.weddingShortDate
              : "22 • 22 • 2000"
          }
        />
      ) : coupleData ? (
        <MainContent />
      ) : (
        <div className="text-white text-center pt-40">Loading data...</div>
      )}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import Cover from "./components/Cover";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import MainContent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:slug" element={<WithCover />} />
        {/* Redirect "/" to default */}
        <Route path="/" element={<Navigate to="/aldi-alin" />} />

        {/* Dynamic route as slug */}
        <Route path="/:slug" element={<WithCover />} />
      </Routes>
    </Router>
  );
};

const WithCover: React.FC = () => {
  const [showCover, setShowCover] = useState(true);
  const { slug } = useParams();
  const [coupleData, setCoupleData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true); // ✅ Tambah loading state

  useEffect(() => {
    setIsLoading(true);
    fetch(`/data/${slug}.json`)
      .then((res) => res.json())
      .then((data) => setCoupleData(data))
      .catch((err) => {
        console.error("Data not found:", err);
      })
      .finally(() => setIsLoading(false)); // ✅ Tutup loading setelah fetch
  }, [slug]);

  // ✅ Tampilkan loading screen dulu sebelum apa pun
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-white text-lg">
        Loading data...
      </div>
    );
  }

  return (
    <div className="w-full h-screen select-none">
      {showCover ? (
        <Cover
          onOpenInvitation={() => setShowCover(false)}
          bridegroom={coupleData?.bridegroom?.shortname || "Aldi"}
          bride={coupleData?.bride?.shortname || "Alin"}
          date={coupleData?.weddingShortDate || "22 • 22 • 2000"}
        />
      ) : (
        <MainContent />
      )}
    </div>
  );
};

export default App;

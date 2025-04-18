import React, { useState } from "react";
import Cover from "./components/Cover";
import MainContent from "./components/MainContent";

const App: React.FC = () => {
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

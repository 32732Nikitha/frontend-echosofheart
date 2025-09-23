import React, { useState } from "react";

const VirtualSpace = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "black" }}>
      {loading && <h2 style={{ color: "white", position: "absolute" }}>Loading Virtual Art Space...</h2>}
      <iframe 
        src="https://www.artsteps.com/embed/67de3fad7af311a818840424" 
        title="Virtual Art Space"
        style={{ width: "100%", height: "100%", border: "none" }}
        frameBorder="0"
        allowFullScreen
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  );
};

export default VirtualSpace;
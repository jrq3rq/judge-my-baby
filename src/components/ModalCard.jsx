import React, { useState } from "react";
// import Counter from "./Counter";

const ModalCard = ({ baby }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailVisible(!isDetailVisible);
    // console.log("ModalCard Data:", baby); // Debugging line
  };

  if (!baby) {
    // Render a loading state or null if baby is not defined
    return <div>Loading.......</div>;
  }

  // Now safely access properties since baby is defined
  const projectName = baby.projectName || "Default Project Name";
  const projectDescription =
    baby.projectDescription || "Default Project Description";
  const projectURL = baby.projectURL || "#";

  return (
    <div style={styles.cardContainer}>
      <h3>{projectName}</h3>
      <p>{projectDescription}</p>
      {isDetailVisible && (
        <>
          <p>
            URL: <a href={projectURL}>{projectURL}</a>
          </p>
          {/* Display other details here */}
        </>
      )}
      <button onClick={toggleDetails}>
        {isDetailVisible ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

// Add some basic styling
const styles = {
  cardContainer: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "10px",
    textAlign: "center",
  },
};

export default ModalCard;

// In pages/BabyDetailsPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BabyDetailsPage = () => {
  const { id } = useParams(); // Get the baby ID from the URL
  const babies = useSelector((state) => state.babyData.babies); // Fetch all babies from Redux
  const [baby, setBaby] = useState(null);

  useEffect(() => {
    // Find the baby with the matching ID
    const foundBaby = babies.find((b) => b.id === id);
    setBaby(foundBaby);
  }, [id, babies]);

  if (!baby) {
    return <div>Loading baby details...</div>;
  }

  return (
    <div>
      <h1>{baby.projectName}</h1>
      <p>{baby.projectDescription}</p>
      {/* Display other baby details here */}
    </div>
  );
};

export default BabyDetailsPage;

import React, { useState } from "react";
import BabyForm from "./BabyForm";
import CardCarousel from "./CardCarousel"; // Ensure this import path is correct

const ParentComponent = () => {
  const [formDataArray, setFormDataArray] = useState([]);

  const handleFormSubmit = (formData) => {
    // Update formDataArray with the new formData
    setFormDataArray([...formDataArray, formData]);
  };

  return (
    <div>
      <BabyForm onFormSubmit={handleFormSubmit} />
      <CardCarousel formData={formDataArray} />
    </div>
  );
};

export default ParentComponent;

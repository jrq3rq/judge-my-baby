import React, { useState } from "react";
import BabyForm from "./BabyForm";
import ImageSquareModal from "./ImageSquareModal";
import ImageSquare from "./ImageSquare";

const ParentComponent = () => {
  const [babyData, setBabyData] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log("Received data in ParentComponent:", formData);
    setBabyData(formData); // Here you save the form data into state
    setIsModalOpen(true);
  };

  return (
    <div>
      <BabyForm onFormSubmit={handleFormSubmit} />
      {babyData && <ImageSquare baby={babyData} />}
      {/* Conditional rendering of ImageSquareModal */}
      {isModalOpen && (
        <ImageSquareModal
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          baby={babyData}
        />
      )}
    </div>
  );
};

export default ParentComponent;

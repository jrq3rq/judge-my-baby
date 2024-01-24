import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBabyById } from "../services/api";

const BabyDetailPage = () => {
  const { id } = useParams();
  const [baby, setBaby] = useState(null);

  useEffect(() => {
    const fetchBaby = async () => {
      const babyData = await getBabyById(id);
      setBaby(babyData);
    };

    fetchBaby();
  }, [id]);

  return (
    <div>
      {baby && (
        <div>
          <h1>{baby.projectName}</h1>
          <img
            src={baby.illustrationUrl}
            alt={baby.character}
            style={{ maxWidth: "100%" }}
          />
          <p>
            <strong>Description:</strong> {baby.projectDescription}
          </p>
          <p>
            <strong>Character:</strong> {baby.character}
          </p>
          <p>
            <strong>Target Audience:</strong> {baby.targetAudience}
          </p>
          <p>
            <strong>Market Potential:</strong> {baby.marketPotential}
          </p>
          <p>
            <strong>Problem/Solution:</strong> {baby.problemSolution}
          </p>
          <p>
            <strong>Unique Differentiators:</strong>{" "}
            {baby.uniqueDifferentiators}
          </p>
          <p>
            <strong>Business Model:</strong> {baby.businessModel}
          </p>
          <p>
            <strong>Specific Feedback Requested:</strong>{" "}
            {baby.specificFeedback}
          </p>
          {baby.projectURL && (
            <a href={baby.projectURL} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default BabyDetailPage;

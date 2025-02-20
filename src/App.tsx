import { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { skills } from "./Skills.tsx";

const App = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % skills.length);
  };

  const handleBack = () => {
    setIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        paddingBottom: "60px", 
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        10 Things that Require Zero Talent
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "gray" }}>
        by Kimberly Manaloto
      </Typography>

      <Card
        sx={{
          maxWidth: 500,
          margin: "20px auto",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img
          src={skills[index].url}
          alt={skills[index].description}
          style={{ width: "100%", height: "auto" }}
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {skills[index].skill}
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", marginTop: "8px" }}>
            {skills[index].description}
          </Typography>
        </CardContent>
      </Card>

      <div
        style={{
          bottom: "8px", 
          left: "20px",
          display: "flex",
          gap: "5px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
            padding: "10px 24px",
            fontSize: "16px",
            "&:hover": { backgroundColor: "#0056b3" },
          }}
          onClick={handleBack}
        >
          Back
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "5px",
            padding: "10px 24px",
            fontSize: "16px",
            "&:hover": { backgroundColor: "#0056b3" },
          }}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default App;

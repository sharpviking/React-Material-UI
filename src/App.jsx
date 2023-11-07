import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "@mui/material/Button";
import "./App.css";
import RatingDemo from "./RatingDemo";
import FormDemo from "./Formdemo";

function App() {
  return (
    <div>
      <Button variant="contained" onClick={() => alert("HI")}>
        Contained
      </Button>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="outlined" color="success">
        Outlined
      </Button>
      <RatingDemo />
      <FormDemo />
    </div>
  );
}

export default App;

import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(50);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const changeVolume = (e, newVal) => {
    setVolume(newVal);
  };
  return (
    <div>
      <h1>Name is :{name}</h1>
      <TextField
        id="filled-basic"
        placeholder="puppy name"
        label="Filled"
        variant="filled"
      />
      <TextField
        id="outlined-basic"
        placeholder="kallia"
        label="Puppy Name"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
      <h2>volume:{volume}</h2>
      <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
    </div>
  );
}

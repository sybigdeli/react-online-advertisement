import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";

import { useState } from "react";

function Filter() {
  const [value, setValue] = useState([0, 69000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (index, event) => {
    const newValues = [...value];
    newValues[index] =
      event.target.value === "" ? 0 : Number(event.target.value);
    setValue(newValues);
  };

  return (
    <Box sx={{}}>
      <Stack>
        <Slider
          value={value}
          onChange={handleChange}
          min={0}
          max={69000000}
          step={10000}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={(value) => `${value}`}
        />
      </Stack>
      <Stack direction="row">
        <Input
          value={value[1]}
          onChange={(e) => handleInputChange(1, e)}
          InputProps={{
            inputProps: {
              min: 0,
              max: 69000000,
              type: "number",
            },
            disableUnderline: true,
          }}
        />

        <Input
          sx={{ outline: "none" }}
          justifyContent="center"
          value={value[0]}
          onChange={(e) => handleInputChange(0, e)}
          InputProps={{
            inputProps: {
              min: 0,
              max: 69000000,
              type: "number",
            },
            disableUnderline: true,
          }}
        />
      </Stack>
    </Box>
  );
}

export default Filter;

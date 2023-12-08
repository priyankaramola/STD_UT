import React, { useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import "../../../assets/css/UnscheduledView.css";
import {
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  TextField,
} from "@mui/material";

const ScheduledView = ({ title }) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const showBackButton = true;

  return (
    <Layout title={title} showBackButton={showBackButton}>
      <div className="container">
        <form action="">
          <div className="fields">
            <Stack direction="row" spacing={4}>
              <Box width={190} style={{ marginTop: 15 }}>
                <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  fullWidth
                  size="small"
                >
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">Srinagar</MenuItem>
                    <MenuItem value={1}>List 1</MenuItem>
                    <MenuItem value={2}>List 2</MenuItem>
                    <MenuItem value={3}>List 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <InputLabel>Sub Division</InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box></Box>
            </Stack>
          </div>
          <div className="calculation"></div>
        </form>
      </div>
    </Layout>
  );
};

export default ScheduledView;

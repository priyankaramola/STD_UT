import React from "react";
import { Box, TextField, Stack, MenuItem, Button, styled } from "@mui/material";
// Date Picker
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

// CSS Module
import styles from "../../../assets/css/Left.module.css";

//styled
const TextBlack = styled("label")`
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
`;

const Left = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <Box className={styles.container}>
      <form>
        <Stack direction="row" spacing={8} className={styles.mb}>
          <Stack direction="column" className={styles.width45}>
            <TextBlack>Sub Division</TextBlack>
            <TextField variant="outlined" />
          </Stack>
          <Stack direction="column" className={styles.width45}>
            <TextBlack>Receiving Station</TextBlack>
            <TextField
              select
              value={selectedOption}
              onChange={handleOptionChange}
              variant="outlined"
              fullWidth
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={6} className={styles.mb}>
          <Stack direction="column" className={styles.width45}>
            <TextBlack>Feeders</TextBlack>
            <TextField
              select
              value={selectedOption}
              onChange={handleOptionChange}
              variant="outlined"
              fullWidth
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          
        </Stack>
        <Stack direction="row" spacing={6} className={styles.mb}>
          <Stack direction="column" className={styles.width45}>
            <TextBlack>Date</TextBlack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={5} className={styles.mb}>
          <Stack direction="column">
            <TextBlack>From</TextBlack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker views={["hours", "minutes", "seconds"]} />
            </LocalizationProvider>
          </Stack>
          <Stack direction="column">
            <TextBlack>To</TextBlack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker views={["hours", "minutes", "seconds"]} />
            </LocalizationProvider>
          </Stack>
          <Stack direction="column">
            <TextBlack>D.T. Hours</TextBlack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker views={["hours", "minutes", "seconds"]} />
            </LocalizationProvider>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={6} className={styles.auto}>
          <Button
            variant="contained"
            className={styles.btn}
            style={{ backgroundColor: "#607fec" }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Left;

import Layout from "../../../Components/Layout/Layout";
// Components

import React from "react";
import { TextField, Stack, MenuItem, Button } from "@mui/material";
// Date Picker
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { Box, styled } from "@mui/material";

// Components
// import CustomTable from "../Scheduled Outage/Table/CustomTable";
import CustomTable from "../Table/CustomTable";

//Module css
import rightstyles from "../../../assets/css/Right.module.css";

// CSS Module
import styles from "../../../assets/css/Left.module.css";

//styled
const TextBlack = styled("label")`
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
`;

const RightBox = styled(Box)`
  width: 40%;
  height: auto;

  @media (max-width: 1024px) {
    width: 50%;
  }
`;

const ScheduledDownTime = ({ title }) => {
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
    <Layout title={title}>
      <div style={{ display: "flex", marginTop: 85, padding: 20 }}>
        <Box className={styles.container}>
          <form style={{backgroundColor:"#fff", padding:40, borderRadius:10, width:"95%", margin:"auto"}}>
            <Stack direction="row" spacing={6} className={styles.mb}>
              <Stack direction="column" className={styles.width45}>
                <TextBlack>Sub Division</TextBlack>
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
              <Stack direction="column" className={styles.width45}>
                <TextBlack>Reciving Station</TextBlack>
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
              <Stack direction="column" className={styles.width45}>
                <TextBlack>Date</TextBlack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </Stack>
            </Stack>
          
            <Stack direction="row" spacing={4} className={styles.mb}>
              <Stack direction="column">
                <TextBlack>From</TextBlack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker views={["hours", "minutes"]} />
                </LocalizationProvider>
              </Stack>
              <Stack direction="column">
                <TextBlack>To</TextBlack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker views={["hours", "minutes"]} />
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
        <RightBox className={rightstyles.container}>
          <Box className={rightstyles.wrapper}>
            <ul className={rightstyles.unordered}>
              <li className={rightstyles.flex}>
                <span className={rightstyles.fixed}>Division:</span>
                <span className={rightstyles.ml}>Kashmir</span>
              </li>
              <li className={rightstyles.flex}>
                <span className={rightstyles.fixed}>Sub Division:</span>
                <span className={rightstyles.ml}>Srinagar</span>
              </li>
              <li className={rightstyles.flex} style={{ marginBottom: 0 }}>
                <span className={rightstyles.fixed}>Feeders:</span>
                <span className={rightstyles.ml}>dummy</span>
              </li>
            </ul>
          </Box>
          <Box className={rightstyles.mt}>
            <CustomTable title={title} />
          </Box>
        </RightBox>
      </div>
    </Layout>
  );
};

export default ScheduledDownTime;

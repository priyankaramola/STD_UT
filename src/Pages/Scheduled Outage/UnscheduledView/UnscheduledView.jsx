import React, { useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import "../../../assets/css/UnscheduledView.css";
import {
  Stack,
  InputLabel,
  Box,
  TextField,
  Button,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Modal from "./Modal";
import UnscheduledTable from "./UnscheduledTable";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const Btn = styled(Button)`
  color: gray;
  border: 1px solid gray;
`;

const UnscheduledView = ({ title }) => {
  const showBackButton = true;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState); // Toggle Drawer state
  };

  return (
    <Layout title={title} showBackButton={showBackButton}>
      <div className="container">
        <div className="wrapper">
          <div className="fields">
            <Stack direction="row" spacing={6}>
              <Box width={150} style={{ marginTop: 22 }}>
                <Btn
                  fullWidth
                  variant="outlined"
                  size="large"
                  endIcon={<ExpandMoreIcon />}
                  onClick={handleToggleDrawer}
                >
                  Srinagar
                </Btn>
                <Modal open={isDrawerOpen} onClose={handleToggleDrawer} />
              </Box>
              <Stack direction="row" spacing={2} alignItems={"center"}>
                <Box width={150}>
                  <InputLabel>Sub Division</InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box width={150}>
                  <InputLabel>Feeders</InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box width={160} maxHeight={30}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </LocalizationProvider>
                </Box>
              </Stack>
            </Stack>
          </div>
          <div className="calculation">
            <Stack direction={"row"} spacing={4} alignItems={"center"}>
              <Box width={180}>
                <InputLabel>Number of Outages</InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box width={180}>
                <InputLabel>Total Downtime Hours</InputLabel>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  style={{
                    marginTop: "20px",
                    color: "gray",
                    border: "1px solid gray",
                  }}
                  endIcon={<PictureAsPdfIcon style={{ color: "#000" }} />}
                >
                  Download
                </Button>
              </Box>
            </Stack>
          </div>
        </div>
        <div className="border-line"></div>
        <div className="unsch-table-view">
          <UnscheduledTable />
        </div>
      </div>
    </Layout>
  );
};

export default UnscheduledView;

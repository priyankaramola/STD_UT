import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, styled } from "@mui/material";
import styles from "../../../assets/css/Table.module.css";

const Wrapper = styled(Paper)`
  border-radius: 0.7rem;
`;
const TextWhite = styled(TableCell)`
  color: #ffffff;
`;
const Btn = styled(Button)`
  font-size: 10px;
  color: #ffffff;
  background-color: #df7020;
  width: 80px;
  height: 30px;
  border-radius: 1rem;
  margin-bottom: 8px;
  :hover {
    background-color: #df7059;
  }
`;

const CustomTable = ({ title }) => {
  const rows = [
    // Sample data for the table
    { id: 1, date: "2023-11-15", from: "8:00 AM", to: "5:00 PM", hours: "9" },
    { id: 2, date: "2023-11-16", from: "9:30 AM", to: "4:00 PM", hours: "6.5" },
    { id: 2, date: "2023-11-16", from: "9:30 AM", to: "4:00 PM", hours: "6.5" },
    { id: 2, date: "2023-11-16", from: "9:30 AM", to: "4:00 PM", hours: "6.5" },
    { id: 2, date: "2023-11-16", from: "9:30 AM", to: "4:00 PM", hours: "6.5" },
    { id: 2, date: "2023-11-16", from: "9:30 AM", to: "4:00 PM", hours: "6.5" },
    { id: 2, date: "2023-11-16", from: "9:30 AM", to: "4:00 PM", hours: "6.5" },
    { id: 2, date: "2023-11-16", from: "9:30 AM", to: "4:00 PM", hours: "6.5" },
    { id: 2, date: "2023-11-16", from: "9:30 AM", to: "4:00 PM", hours: "6.5" },
    { id: 2, date: "2023-11-16", from: "9:30 AM", to: "4:00 PM", hours: "6.5" },
    // Add more rows as needed
  ];

  return (
    <div className={styles.maxHeight}>
      <Wrapper>
        <Table>
          <TableHead>
            <TableRow className={styles.headerRow}>
              <TextWhite
                style={{
                  textAlign: "center",
                  verticalAlign: "bottom",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                DATE
              </TextWhite>
              <TextWhite
                style={{
                  textAlign: "center",
                  verticalAlign: "bottom",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                FROM
              </TextWhite>
              <TextWhite
                style={{
                  textAlign: "center",
                  verticalAlign: "bottom",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                TO
              </TextWhite>
              <TextWhite
                style={{
                  textAlign: "center",
                  verticalAlign: "bottom",
                  display: "flex",
                  flexDirection: "column",
                  borderWidth: 0,
                  alignItems: "center",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                {title === "Unscheduled Outage" ? (
                  <Btn href="/unscheduled-table-view">View more</Btn>
                ) : (
                  <Btn href="/scheduled-table-view">View more</Btn>
                )}
                D.T. HOURS
              </TextWhite>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} className={styles.tableRow}>
                <TableCell style={{ textAlign: "center" }}>
                  {row.date}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {row.from}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>{row.to}</TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {row.hours}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrapper>
    </div>
  );
};

export default CustomTable;

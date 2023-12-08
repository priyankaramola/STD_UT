import React from "react";
import { Box, styled } from "@mui/material";

// Components
import CustomTable from "../Table/CustomTable";

//Module css
import styles from "../../../assets/css/Right.module.css";

const RightBox = styled(Box)`
  width: 40%;
  height: auto;
  @media (max-width: 1024px) {
    width: 50%;
  }
`;

// const Btn = styled(Button)`
//   background: lightcoral;
//   position: absolute;
//   left: 87%;
//   top: 43%;
// `;

const Right = ({ title }) => {
  return (
    <RightBox className={styles.container}>
      <Box className={styles.wrapper}>
        <ul className={styles.unordered}>
          <li className={styles.flex}>
            <span className={styles.fixed}>Division:</span>
            <span className={styles.ml}>Kashmir</span>
          </li>
          <li className={styles.flex}>
            <span className={styles.fixed}>Sub Division:</span>
            <span className={styles.ml}>Srinagar</span>
          </li>
          <li className={styles.flex} style={{ marginBottom: 0 }}>
            <span className={styles.fixed}>Feeders:</span>
            <span className={styles.ml}>dummy</span>
          </li>
        </ul>
      </Box>
      <Box className={styles.mt}>
        <CustomTable title={title} />
      </Box>
    </RightBox>
  );
};

export default Right;

import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./hometitle.module.css";

const HomeTitle: React.FC = () => {
  return (
    <Grid container>
      <Grid size={{ xs: 6 }}>
        <Typography
          textTransform={"uppercase"}
          variant="subtitle1"
          className={styles.text}
        >
          Polls List
        </Typography>
      </Grid>
      <Grid size={{ xs: 6 }} justifyContent={"flex-end"} display={"flex"}>
        <Button
          endIcon={<AddCircleIcon color="primary" />}
          className={styles.text}
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeTitle;

import React from "react";
import Grid from "@mui/material/Grid2";
import { Typography, Button, useMediaQuery } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./hometitle.module.css";

interface HomeTitleProps {
  onClickAdd: () => void;
}

const HomeTitle: React.FC<HomeTitleProps> = ({ onClickAdd }) => {
  const isSm = useMediaQuery("(max-width: 768px)");

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
          endIcon={<AddCircleIcon style={{ fontSize: 32 }} color="primary" />}
          className={styles.text}
          onClick={onClickAdd}
        >
          {!isSm && "Add New"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeTitle;

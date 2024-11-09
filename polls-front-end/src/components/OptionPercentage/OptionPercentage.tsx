import React from "react";
import { Option } from "../../utils/types";
import { LinearProgress, Typography } from "@mui/material";
import styles from "./optionpercentage.module.css";
import Grid from "@mui/material/Grid2";

interface OptionPercentageProps {
  option: Option;
  totalVotes: number;
}

const OptionPercentage: React.FC<OptionPercentageProps> = ({
  option,
  totalVotes,
}) => {
  const percentage = ((option.votes ?? 0) * 100) / totalVotes;

  return (
    <div style={{ marginTop: 4 }}>
      <Grid container justifyContent={"center"} alignItems={"center"} spacing={1}>
        <Grid size={{ xs: 11 }}>
          <Typography className={styles.text}>{option.name}</Typography>
          <LinearProgress variant="determinate" value={percentage || 0} />
        </Grid>
        <Grid size={{ xs: 1 }}>
          <Typography className={styles.text}>{percentage || 0}%</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default OptionPercentage;

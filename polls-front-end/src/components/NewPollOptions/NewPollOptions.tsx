import React, { useMemo } from "react";
import { Poll } from "../../utils/types";
import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./newpolloptions.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface NewPollOptionsProps {
  pollData: Poll;
  setPollData: React.Dispatch<React.SetStateAction<Poll>>;
  sentToValidate: boolean;
}

const NewPollOptions: React.FC<NewPollOptionsProps> = ({
  pollData,
  setPollData,
  sentToValidate,
}) => {
  const options = useMemo(() => {
    return pollData.options;
  }, [pollData]);

  const handleChangeOption = (index: number, val: string) => {
    const optionsTmp = [...options];
    optionsTmp[index].name = val;

    setPollData((prev) => ({ ...prev, options: [...optionsTmp] }));
  };

  const addNewOption = () => {
    const optionsTmp = [...options];
    optionsTmp.push({ name: "" });

    setPollData((prev) => ({ ...prev, options: [...optionsTmp] }));
  };

  return (
    <div>
      <Typography className={styles.text} variant="h6" gutterBottom mt={2}>
        Options:
      </Typography>
      {sentToValidate && !pollData.options.length && (
        <Typography color="error">Please add at least one option</Typography>
      )}
      {options.map((option, index) => (
        <Grid
          container
          key={option.id ?? `${index} - new-option`}
          mb={2}
          alignItems={"center"}
          spacing={1}
        >
          <Grid size={{ xs: 1 }}>
            <Typography>{index + 1}</Typography>
          </Grid>
          <Grid size={{ xs: 11 }}>
            <TextField
              variant="filled"
              value={option.name}
              label="Option Name"
              name="optionName"
              placeholder="Introduce the option name"
              onChange={(e) => handleChangeOption(index, e.target.value)}
              error={sentToValidate && !option.name}
              fullWidth
            />
            {sentToValidate && !option.name && (
              <Typography color="error">
                Please provide a valid option name
              </Typography>
            )}
          </Grid>
        </Grid>
      ))}

      <Button
        endIcon={<AddCircleIcon style={{ fontSize: 32 }} color="primary" />}
        className={styles.text}
        onClick={addNewOption}
      >
        ADD NEW
      </Button>
    </div>
  );
};

export default NewPollOptions;

import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Poll, Vote } from "../../utils/types";
import { Typography } from "@mui/material";

interface OptionsRadioVoteProps {
  poll: Poll;
  setVote: React.Dispatch<React.SetStateAction<Vote>>;
  sentToValidate: boolean;
}

const OptionsRadioVote: React.FC<OptionsRadioVoteProps> = ({
  poll,
  setVote,
  sentToValidate,
}) => {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt((event.target as HTMLInputElement).value);
    setValue(val);
    setVote((prev) => ({ ...prev, optionId: val }));
  };

  return (
    <FormControl>
      <FormLabel>Options:</FormLabel>
      <RadioGroup
        name="radio-buttons-vote"
        value={value}
        onChange={handleChange}
      >
        {poll.options.map((option) => (
          <FormControlLabel
            value={option.id}
            control={<Radio />}
            label={option.name}
          />
        ))}
      </RadioGroup>
      {sentToValidate && value === null && (
        <Typography color="error">Select at least one option</Typography>
      )}
    </FormControl>
  );
};

export default OptionsRadioVote;

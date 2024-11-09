import React from "react";
import { Button, CircularProgress } from "@mui/material";
import styles from "./pollmodalbuttons.module.css";

interface PollModalButtonsProps {
  onCancel: () => void;
  loading: boolean;
}

const PollModalButtons: React.FC<PollModalButtonsProps> = ({
  onCancel,
  loading,
}) => {
  return (
    <div className={styles.buttonsContainer}>
      {loading && <CircularProgress />}
      <Button variant="text" className={styles.buttonText} onClick={onCancel}>
        Cancel
      </Button>
      <Button variant="contained" type="submit" style={{ color: "#fff" }}>
        {loading ? "Saving" : "Save"}
      </Button>
    </div>
  );
};

export default PollModalButtons;

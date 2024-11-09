import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import styles from "./newpollmodal.module.css";
import { Poll } from "../../utils/types";
import NewPollOptions from "../NewPollOptions";
import { API_URL, Endpoints } from "../../utils/constants";
import PollModalButtons from "../PollModalButtons/PollModalButtons";

interface NewPollModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPollModal: React.FC<NewPollModalProps> = ({ open, setOpen }) => {
  const [pollData, setPollData] = useState<Poll>({
    name: "",
    options: [],
  });
  const [sentToValidate, setSentToValidate] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setSuccess(false);
    setError(false);
    setPollData({
      name: "",
      options: [],
    });
  }, [open]);

  const validate = () => {
    if (!pollData.name || pollData.options.some((option) => !option.name))
      return false;
    return true;
  };

  const submit = async () => {
    setError(false);
    setSentToValidate(true);
    if (validate()) {
      setLoading(true);
      const response = await fetch(`${API_URL}${Endpoints.POLLS}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pollData),
      });

      if (response.ok) {
        setSuccess(true);
        setSentToValidate(false);
        setTimeout(() => {
          hideModal();
        }, 2000);
      } else setError(true);
      setLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit();
  };

  const hideModal = () => setOpen(false);

  return (
    <Modal open={open} onClose={hideModal}>
      <div className={styles.modalContainer}>
        <div>
          <div className={styles.buttonContainer}>
            <Button
              endIcon={<HighlightOffIcon style={{ fontSize: 32 }} />}
              className={styles.button}
              onClick={hideModal}
            >
              Close
            </Button>
          </div>
          <Box
            component="form"
            className={styles.formContainer}
            onSubmit={onSubmit}
            onChange={() => setSentToValidate(false)}
          >
            <Typography variant="h5" fontWeight={600} mb={3}>
              New Poll:
            </Typography>
            {success && (
              <Typography color="success">Poll created successfully</Typography>
            )}
            {error && (
              <Typography color="error">
                Error creating the poll, please try again.
              </Typography>
            )}
            <TextField
              name="poll"
              variant="filled"
              value={pollData.name}
              label="Poll Name"
              placeholder="Introduce the poll name"
              fullWidth
              onChange={(e) =>
                setPollData((prev) => ({ ...prev, name: e.target.value }))
              }
              error={!!pollData.name && sentToValidate}
            />
            {!pollData.name && sentToValidate && (
              <Typography color="error">
                Please provide a valid poll name
              </Typography>
            )}

            <NewPollOptions
              pollData={pollData}
              setPollData={setPollData}
              sentToValidate={sentToValidate}
            />

            <PollModalButtons onCancel={hideModal} loading={loading} />
          </Box>
        </div>
      </div>
    </Modal>
  );
};

export default NewPollModal;

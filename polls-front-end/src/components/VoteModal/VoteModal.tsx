import React, { useState } from "react";
import { Poll, Vote } from "../../utils/types";
import styles from "../NewPollModal/newpollmodal.module.css";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PollModalButtons from "../PollModalButtons/PollModalButtons";

interface VoteModalProps {
  poll: Poll;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const VoteModal: React.FC<VoteModalProps> = ({ poll, open, setOpen }) => {
  const hideModal = () => setOpen(false);
  const [sentToValidate, setSentToValidate] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");

  const [vote, setVote] = useState<Vote>({
    voterEmail: "",
    pollId: poll.id ?? 0,
  });

  const validate = () => {
    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!regexp.test(vote.voterEmail)) {
      setEmailError("Invalid email");
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
    }
    // await submit();
  };

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
              <Typography fontWeight={600}>Vote:</Typography>
              {poll.name}
            </Typography>
            {success && (
              <Typography color="success">Voted sent succesfully</Typography>
            )}
            {error && (
              <Typography color="error">
                Error voing, please try again.
              </Typography>
            )}
            <TextField
              name="poll"
              variant="filled"
              value={vote.voterEmail}
              label="Email"
              placeholder="Introduce your email"
              type="email"
              fullWidth
              onChange={(e) =>
                setVote((prev) => ({ ...prev, voterEmail: e.target.value }))
              }
              error={Boolean(emailError)}
            />
            <Typography color="error">{emailError}</Typography>

            <PollModalButtons onCancel={hideModal} loading={loading} />
          </Box>
        </div>
      </div>
    </Modal>
  );
};

export default VoteModal;

import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeTitle from "../components/HomeTitle/HomeTitle";
import NewPollModal from "../components/NewPollModal";
import PollsList from "../components/PollsList";
import { Poll } from "../utils/types";
import VoteModal from "../components/VoteModal/VoteModal";

const Home: React.FC = () => {
  const [openNewPollModal, setOpenNewPollModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState<Poll | null>(null);

  return (
    <Container>
      <HomeTitle onClickAdd={() => setOpenNewPollModal(true)} />
      <NewPollModal
        open={openNewPollModal}
        setOpen={setOpenNewPollModal}
        reload={reload}
        setReload={setReload}
      />
      <PollsList reload={reload} setSelectedPoll={setSelectedPoll} />
      {selectedPoll && (
        <VoteModal
          open={!!selectedPoll}
          setOpen={(val) => {
            if (val === false) setSelectedPoll(null);
          }}
          poll={selectedPoll}
        />
      )}
    </Container>
  );
};

export default Home;

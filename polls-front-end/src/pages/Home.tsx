import { Container } from "@mui/material";
import React, { useState } from "react";
import HomeTitle from "../components/HomeTitle/HomeTitle";
import NewPollModal from "../components/NewPollModal";

const Home: React.FC = () => {
  const [openNewPollModal, setOpenNewPollModal] = useState(false);

  return (
    <Container>
      <HomeTitle onClickAdd={() => setOpenNewPollModal(true)} />
      <NewPollModal open={openNewPollModal} setOpen={setOpenNewPollModal} />
    </Container>
  );
};

export default Home;

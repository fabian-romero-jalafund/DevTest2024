import React from "react";
import { Container, Typography } from "@mui/material";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Typography component={"h1"} variant="h5" fontWeight={600}>
          Online Polls
        </Typography>
      </Container>
    </header>
  );
};

export default Header;

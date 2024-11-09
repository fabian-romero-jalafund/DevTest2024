import React, { useMemo, useState } from "react";
import { Poll } from "../../utils/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OptionPercentage from "../OptionPercentage/OptionPercentage";

interface PollViewProps {
  poll: Poll;
}

const PollView: React.FC<PollViewProps> = ({ poll }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isSm = useMediaQuery("(max-width: 768px)");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const pollVotes = useMemo(() => {
    let votes = 0;
    poll.options.forEach((option) => {
      votes += option.votes ?? 0;
    });

    return votes;
  }, [poll]);

  return (
    <Accordion
      expanded={expanded}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          ) : (
            <ExpandMoreIcon />
          )
        }
      >
        <div>
          <Typography variant="h6">{poll.name}</Typography>
          {!expanded && (
            <div>
              <Typography variant="body1">{pollVotes} votes</Typography>
            </div>
          )}
        </div>
        <Menu
          id="basic-menu"
          open={openMenu}
          anchorEl={anchorEl}
          onClose={() => {
            setOpenMenu(false);
            setAnchorEl(null);
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>Vote</MenuItem>
        </Menu>
      </AccordionSummary>

      <AccordionDetails>
        {poll.options.map((option) => (
          <OptionPercentage
            key={option.id + "option"}
            option={option}
            totalVotes={pollVotes}
          />
        ))}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Button variant="outlined">Vote</Button>
          <Typography variant="body1" mt={1} pr={1}>
            {pollVotes} votes
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default PollView;

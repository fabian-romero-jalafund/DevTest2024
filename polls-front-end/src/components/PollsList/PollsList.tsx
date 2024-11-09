import React, { useEffect, useState } from "react";
import { Poll } from "../../utils/types";
import { API_URL, Endpoints } from "../../utils/constants";
import { CircularProgress, Typography } from "@mui/material";
import PollView from "../PollView";

interface PollsListProps {
  reload: boolean;
  setSelectedPoll: React.Dispatch<React.SetStateAction<Poll | null>>
}

const PollsList: React.FC<PollsListProps> = ({ reload, setSelectedPoll }) => {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}${Endpoints.POLLS}`);

        if (response.ok) {
          const pollsList = (await response.json()) as Poll[];
          setPolls(pollsList);
        } else setError(true);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchPolls();
  }, [reload]);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Error getting polls, try again.</Typography>
      ) : (
        <>
          {polls.map((poll) => (
            <PollView key={poll.id + "poll"} poll={poll} setSelectedPoll={setSelectedPoll} />
          ))}
        </>
      )}
    </>
  );
};

export default PollsList;

import { useState } from "react";

import Typography from "@mui/material/Typography";
import RecentlyCreatedJob from "./RecentlyCreatedJob";
import SearchBar from "@/components/SearchBar";
import { Grid } from "@mui/material";

export default function RecentlyCreatedJobList({ jobs }) {
  const [data, setData] = useState(jobs);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ paddingTop: 4, paddingBottom: 2 }}>
            Recently Created Job Postings
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <SearchBar data={jobs} setData={setData} />
        </Grid>

        <Grid item>
          {data.map((job, index) => {
            return <RecentlyCreatedJob key={index} job={job} />;
          })}
        </Grid>
      </Grid>
    </>
  );
}

import { useState, useEffect } from "react";

import { Box, TextField } from "@mui/material";

export default function SearchBar({ data, setData }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      setData(data);
    } else {
      const filteredData = searchJobs(data, search);
      setData(filteredData);
    }
  }, [search, data, setData]);

  return (
    <>
      <Box sx={{ paddingBottom: 2 }}>
        <TextField
          label="Search"
          fullWidth
          sx={{ width: "50%" }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
      </Box>
    </>
  );
}

function searchJobs(data, query) {
  if (!query) {
    return data;
  } else {
    return data.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.qualifications.toLowerCase().includes(query)
    );
  }
}

import Header from "@/components/other/Header";
import { Box } from "@mui/material";
import React from "react";

const Sample = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Sample Page" subtitle="Welcome to sample page" />
      </Box>
      <Box>
          <h1>SampleSampleSampleSampleSampleSampleSampleSampleSampleSampleSampleSampleSampleSampleSampleSampleSampleSample</h1>
        </Box>
    </Box>
  );
};

export default Sample;

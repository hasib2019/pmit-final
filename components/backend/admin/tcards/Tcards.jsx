import Header from "@/components/other/Header";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import ContactCard from "./ContactCard";
import ContactCardMui from "./ContactCardMui";

const Tcards = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Sample Page" subtitle="Welcome to sample page" />
      </Box>
      {/* Button  */}
      <Grid container>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="left" mt="20px">
            <Button
              type="submit"
              sx={{ backgroundColor: "#6571ff !important" }}
              variant="contained"
            >
              New Tcard
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button
              type="submit"
              sx={{ backgroundColor: "#6571ff !important" }}
              variant="contained"
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* card  */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ContactCardMui />
        </Grid>
        <Grid item xs={4}>
          <ContactCardMui />
        </Grid>
        <Grid item xs={4}>
          <ContactCardMui />
        </Grid>
        <Grid item xs={4}>
          <ContactCardMui />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tcards;

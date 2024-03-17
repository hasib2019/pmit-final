/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const ContactCardMui = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e3e3e37d !important",
        height: "200px",
        borderRadius: "5px",
        textAlign: "center",
        mt: 7
      }}
    >
      <Box sx={{display: 'flex', height: '60px', textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
        <Image src={"/demo.jpg"} height={100} width={100} alt="pp" style={{marginTop: '-30px', borderRadius: '50%'}} />
      </Box>

      <Box>
        <h1>Md. Hasibuzzaman</h1>
        <h1>Md. Hasibuzzaman</h1>
        <h1>Md. Hasibuzzaman</h1>
        <h1>Md. Hasibuzzaman</h1>
        <h1>Md. Hasibuzzaman</h1>
      </Box>
    </Box>
  );
};
export default ContactCardMui;

import { Box } from "@mui/material";
import React from "react";

const TopLoading = ({ percent = 0 }) => {
  return <Box sx={{transition: '0.3s ease'}} borderRadius={3} height={"4px"} width={percent + "%"} bgcolor={"#3C81FD"} />;
};

export default TopLoading;

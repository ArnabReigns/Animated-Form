import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import React from "react";

const Topbar = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Icon icon="devicon:terraform" fontSize={"2rem"} />

      <Box
        p={1.8}
        py={0.6}
        borderRadius={5}
        fontSize={'0.8rem'}
        border={"1px solid black"}
        borderColor={"primary.main"}
        color={"primary.main"}
        sx={{
            cursor: 'pointer',
            ":hover": {
                bgcolor: '#3c80fd31',
            }
        }}
      >
        Help
      </Box>
    </Box>
  );
};

export default Topbar;

import { Icon } from "@iconify/react";
import { Box, Button, ButtonGroup, InputBase, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CompanySite = ({ setWebsite, setStep }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      flex={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={1}
    >
      <Typography
        display={"flex"}
        alignItems={"center"}
        gap={1}
        p={1}
        borderRadius={2}
        width={"fit-content"}
        position={"relative"}
        sx={{
          cursor: "pointer",
          transition: "0.2s ease",
          ":hover": {
            bgcolor: "#eeeeee65",
            transform: "translateX(5px)",
          },
        }}
        onClick={() => setStep((prev) => prev - 1)}
      >
        <Icon icon="mingcute:back-fill" /> Back
      </Typography>
      <Typography fontSize={"2rem"} fontWeight={500}>
        Your Company Website
      </Typography>
      <Box display={'flex'} alignItems={'center'}>
        <Typography fontSize={'3rem'} fontWeight={600} color={'#eee'}>https://</Typography>
        <InputBase
          onChange={(e) => setWebsite(e.target.value)}
          autoFocus
          placeholder="type here"
          sx={{
            fontWeight: 500,
            width: "100%",
            p: 1,
          }}
          inputProps={{
            style: {
              textTransform: "lowercase",
              border: 0,
              outline: 0,
              fontSize: "3rem",
              textAlign: "left",
            },
            className: "customPlaceholderColor",
          }}
        />
      </Box>
      <Box display={"flex"} gap={1} alignItems={"center"}>
        <Box
          px={4}
          py={1.3}
          borderRadius={20}
          color={"white"}
          fontWeight={500}
          width={"fit-content"}
          sx={{
            transition: "0.2s ease",
            background:
              "linear-gradient(90deg, rgba(132,80,245,1) 0%, rgba(67,123,246,1) 100%)",
            cursor: "pointer",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
          onClick={() => setStep((prev) => prev + 1)}
        >
          Next
        </Box>
        <Box
          display={"flex"}
          height={"fit-content"}
          alignItems={"center"}
          gap={1}
          ml={2}
        >
          <Box
            p={1}
            py={0.5}
            bgcolor={"#F7F5F9"}
            display={"flex"}
            borderRadius={2}
          >
            <Icon icon="uil:enter" />
          </Box>

          <Typography variant="caption" color={"gray"}>
            Or Press Enter
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanySite;

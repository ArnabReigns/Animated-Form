import { Box, Button, InputBase, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import emailTop from "../assets/email-top.svg";
import emailTopLeft from "../assets/email-top-left.png";
import emailLeft from "../assets/email-left.png";
import emailLeftBottom from "../assets/email-left-bottom.png";
import emailTopRight from "../assets/email-top-right.png";
import emailRightBottom from "../assets/email-right-bottom.png";
import emailRight from "../assets/email-right.png";

const EmailForm = ({ setStep }) => {
  const handleEnterKey = (e) => {
    if (e.key === "Enter") setStep(2);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterKey);

    return () => document.removeEventListener("keydown", handleEnterKey);
  }, []);

  return (
    <Box
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      {/* top left */}
      <motion.img
        src={emailTopLeft}
        height={"60px"}
        alt=""
        style={{
          position: "absolute",
          top: "18%",
          left: "15%",
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        initial={{
          x: 150,
          y: 90,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      />
      {/* email left */}
      <motion.img
        src={emailLeft}
        height={"30px"}
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "0%",
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        initial={{
          x: 100,
          y: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.3,
        }}
      />
      {/* left bottom */}
      <motion.img
        src={emailLeftBottom}
        height={"55px"}
        alt=""
        style={{
          position: "absolute",
          top: "82%",
          left: "16%",
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        initial={{
          x: 100,
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 0.4,
        }}
      />
      {/* right top */}
      <motion.img
        src={emailTopRight}
        height={"55px"}
        alt=""
        style={{
          position: "absolute",
          top: "8%",
          left: "80%",
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        initial={{
          x: -100,
          y: 100,
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.3,
        }}
      />
      {/* right bottom */}
      <motion.img
        src={emailRightBottom}
        height={"45px"}
        alt=""
        style={{
          position: "absolute",
          top: "82%",
          left: "85%",
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        initial={{
          x: -130,
          y: -130,
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      />
      {/* right */}
      <motion.img
        src={emailRight}
        height={"30px"}
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "83%",
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        initial={{
          x: -150,
          y: 0,
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      />

      {/* main */}
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <img src={emailTop} height={"230px"} alt="" />
          <Typography fontSize={"1.6rem"} fontWeight={600} textAlign={"center"}>
            Get started with your email
          </Typography>
          <InputBase
            placeholder="type here"
            autoFocus
            sx={{
              mt: 1,
              fontWeight: 500,
              width: "100%",
            }}
            inputProps={{
              style: {
                border: 0,
                outline: 0,
                fontSize: "2.7rem",
                textAlign: "center",
              },
              className: "customPlaceholderColor",
            }}
          />

          <Box
            mt={4}
            px={4}
            py={1.3}
            borderRadius={20}
            color={"white"}
            fontWeight={500}
            sx={{
              transition: "0.2s ease",
              background:
                "linear-gradient(90deg, rgba(132,80,245,1) 0%, rgba(67,123,246,1) 100%)",
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
            onClick={() => setStep(2)}
          >
            Get Started
          </Box>
          <Typography
            width={"80%"}
            textAlign={"center"}
            mt={3}
            variant="caption"
          >
            By Clicking this button, I acknowledge and agree to the terms and
            conditions on behalf of the company defined above.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default EmailForm;

import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Final = ({ setStep }) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
      height={"100%"}
      component={motion.div}
      initial={{
        y: 20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeIn'
      }}
    >
      <Typography component={motion.div} fontSize={"5rem"} key={1}>
        🎉
      </Typography>
      <Typography
        key={2}
        component={motion.div}
        fontSize={"2rem"}
        textAlign={"center"}
        fontWeight={500}
      >
        You'r invited to our <br /> Demo Meeting!
      </Typography>
      <Typography
        component={motion.div}
        key={3}
        fontSize={"1rem"}
        fontWeight={300}
        textAlign={"center"}
      >
        Next step would be having some fun. <br /> let us know when you will be
        free!
      </Typography>
      <Box
        component={motion.div}
        key={4}
        px={5}
        py={1.3}
        borderRadius={20}
        color={"white"}
        fontWeight={500}
        width={"fit-content"}
        mt={4}
        sx={{
          transition: "0.2s ease",
          background:
            "linear-gradient(90deg, rgba(132,80,245,1) 0%, rgba(67,123,246,1) 100%)",
          cursor: "pointer",
          ":hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        Book A Demo
      </Box>
    </Stack>
  );
};

export default Final;

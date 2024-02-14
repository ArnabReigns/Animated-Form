import React, { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const Products = ({ setStep }) => {
  const options = [
    "💎 Jewelry",
    "💊 Medical & Rx",
    "📚 Books",
    "👕 Clothing",
    "🍕 Food & Groceries",
    "🎮 Electronics",
    "🎁 Gifts & Toys",
    "🚗 Automotive",
    "🎨 Art & Crafts",
    "🎉 Party Supplies",
    "📷 Photography",
    "🏠 Real Estate",
    "🎤 Music & Instruments",
    "💄 Beauty & Personal Care",
    "📱 Mobile Phones",
    "🏋️‍♂️ Fitness & Sports",
    "🍷 Wine & Spirits",
    "🎭 Events & Tickets",
    "🏞️ Travel & Adventure",
    "👶 Baby & Kids",
    "🎯 Hobbies & Collectibles",
    "💻 Software & Technology",
    "🕹️ Gaming",
    "🍔 Restaurants & Dining",
    "🎬 Film & Cinema",
  ];

  const [selected, setSelected] = useState(null);

  return (
    <Box
      display={"flex"}
      height={"100%"}
      flexDirection={"column"}
      justifyContent={"center"}
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
        ease: "easeIn",
      }}
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
        onClick={() => setStep((p) => p - 1)}
      >
        <Icon icon="mingcute:back-fill" /> Back
      </Typography>
      <Typography fontSize={"2rem"} fontWeight={500} mt={1}>
        What kind of products do you sell?
      </Typography>

      <Box display={"flex"} flexWrap={"wrap"} gap={2} mt={4} width={"80vw"}>
        {options.map((o, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{
              opacity: 0,
              scale: 0.7,
              transformOrigin: 'left'
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              ease: 'circIn',
              duration: 0.3,
              delay: Math.floor(Math.random() * 10) * 0.06,
            }}
            p={0.7}
            px={2}
            border={"2px solid"}
            fontSize={"0.9rem"}
            borderColor={selected == i ? "#417AF4" : "#e5e5e5"}
            color={selected == i ? "#417AF4" : "black"}
            sx={{ transition: "0.3s ease", cursor: "pointer" }}
            borderRadius={10}
            onClick={() => setSelected(i)}
          >
            <Box sx={{ userSelect: "none" }}>{o}</Box>
          </Box>
        ))}
      </Box>
      <Box display={"flex"} gap={1} alignItems={"center"} mt={4}>
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
          onClick={() => setStep((p) => p + 1)}
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

export default Products;

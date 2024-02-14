import { Icon } from "@iconify/react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";

import shopifyLogo from "/src/assets/shopify.png";
import magnetoLogo from "/src/assets/magneto.svg";
import wooLogo from "/src/assets/woo.png";
import bcLogo from "/src/assets/bc.png";
import salLogo from "/src/assets/sals.png";

const Platform = ({ setStep }) => {
  const [value, setValue] = useState(null);

  const handleEnterKey = (e) => {
    if (e.key === "Enter") setStep((prev) => prev + 1);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterKey);

    return () => document.removeEventListener("keydown", handleEnterKey);
  }, []);

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
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
        ease: "easeIn",
      }}
    >
      <Box flex={1}>
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
        <Typography fontSize={"2rem"} fontWeight={500}>
          Your E-Commerce Platform
        </Typography>

        <FormControl sx={{ mt: 2 }}>
          <RadioGroup value={value} onChange={(e, v) => setValue(v)}>
            {[
              "Shopify",
              "Magneto",
              "WooCommerce",
              "BigCommerce",
              "Salsford Commerce Cloud",
              "Other",
            ].map((e, i) => (
              <FormControlLabel
                value={i + 1}
                control={<Radio />}
                key={i}
                label={e}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Box display={"flex"} gap={1} alignItems={"center"} mt={2}>
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

      {/* right */}
      <RightCard value={value} />
    </Box>
  );
};

const RightCard = ({ value }) => {
  const variant = {
    l: {
      hidden: {
        pathLength: 0,
        transition: {
          delay: 0.2,
        },
      },
      active: {
        pathLength: 1,
        transition: {
          duration: 0.8,
          delay: 0.2,
        },
      },
    },
    h: {
      hidden: {
        opacity: 0,
      },
      active: {
        opacity: 1,
        transition: {
          delay: 1,
        },
      },
    },
    c: {
      hidden: {
        opacity: 0,
        transition: {
          delay: 0.4,
        },
      },
      active: {
        opacity: 1,
      },
    },
  };

  const icons = [
    { name: "Shopify", logo: shopifyLogo },
    { name: "Magneto", logo: magnetoLogo },
    { name: "WooCommerce", logo: wooLogo },
    { name: "BigCommerce", logo: bcLogo },
    {
      name: "Salsford Commerce Cloud",
      logo: salLogo,
    },
  ];

  const arrows = [
    {
      height: "120px",
      top: "100px",
      left: "35px",
      viewBox: "0 0 65 56",
      circle: {
        cx: "63.5",
        cy: "1.5",
        r: "1.5",
      },
      line_path: "M62.5 1.5C36 -0.5 1.80002 6.5 3.00002 54.5",
      head_path: "M0.5 53L3 55L5.5 53",
    },
    {
      height: "60px",
      top: "170px",
      left: "56px",
      viewBox: "0 0 94 33",
      circle: {
        cx: "92.5001",
        cy: "1.5",
        r: "1.5",
      },
      line_path: "M91.5001 1.5C33.0001 -1 8.5033 13.5 2.5 30.5",
      head_path: "M0.889191 28L2.29128 31.0374L5.47176 30",
    },
    {
      height: "13px",
      top: "260px",
      left: "90px",
      viewBox: "0 0 82 7",
      circle: {
        cx: "80.5",
        cy: "3.5",
        r: "1.5",
      },
      line_path: "M80.5 3.5L1.30666 3.5356",
      head_path: "M3.6897 5.99907L1 3.50256L3.6897 0.999999",
    },
    {
      height: "60px",
      top: "315px",
      left: "55px",
      viewBox: "0 0 94 32",
      circle: {
        cx: "91.5",
        cy: "30.5",
        r: "1.5",
      },
      line_path: "M91.5001 30.5018C33.0001 32.9988 8.5033 18.5158 2.5 1.5356",
      head_path: "M0.889191 4.03268L2.29128 0.998839L5.47176 2.035",
    },
    {
      height: "125px",
      top: "325px",
      left: "30px",
      viewBox: "0 0 81 71",
      circle: {
        cx: "79.5",
        cy: "69.5",
        r: "1.5",
      },
      line_path: "M79.5 69.5C20.5 67.5 10 42.5 3.5 1.5",
      head_path: "M1.24411 3.75256L3.48463 1.27262L6.21336 3.20734",
    },
  ];

  function calcTransform(i) {
    const r = 180;
    const angle = 112;
    const offset = 0;
    const cal = (angle / icons.length) * i;
    return {
      initial: `rotate(${cal + offset}deg) translateX(${
        r - 100
      }px) translateY(-${r - 100}px) rotate(-${cal}deg)`,
      final: `rotate(${
        cal + offset
      }deg) translateX(${r}px) translateY(-${r}px) rotate(-${cal}deg)`,
    };
  }

  return (
    <Box
      width={"22rem"}
      position={"relative"}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
    >
      {arrows.map((ar, i) => (
        <Box
          key={i}
          height={ar.height}
          position={"absolute"}
          top={ar.top}
          left={ar.left}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.35 + i * 0.07,
          }}
        >
          <svg
            width="100%"
            height="100%"
            fill="None"
            viewBox={ar.viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={ar.line_path} stroke="#f2f2f2" stroke-linecap="round" />
            <path d={ar.head_path} stroke="#f2f2f2" stroke-linecap="round" />
            <circle {...ar.circle} fill="#f2f2f2" />
            <motion.path
              d={ar.line_path}
              stroke="#4977F6"
              stroke-linecap="round"
              initial={{ pathLength: 0 }}
              variants={variant.l}
              animate={value == i + 1 ? "active" : "hidden"}
            />
            <motion.path
              variants={variant.h}
              animate={value == i + 1 ? "active" : "hidden"}
              initial={{ opacity: 0 }}
              d={ar.head_path}
              stroke="#4977F6"
              stroke-linecap="round"
            />
            <motion.circle
              variants={variant.c}
              animate={value == i + 1 ? "active" : "hidden"}
              initial={{ opacity: 0 }}
              {...ar.circle}
              fill="#4977F6"
            />
          </svg>
        </Box>
      ))}

      <Box zIndex={99} height={"4rem"}>
        {icons.map((e, i) => (
          <Box
            key={i}
            height={"4rem"}
            position={"absolute"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#FFFFFF"}
            borderRadius={"50%"}
            border={"1px solid #eee"}
            sx={{
              aspectRatio: 1,
              // transform: calcTransform(i),
            }}
            component={motion.div}
            initial={{ opacity: 0, transform: calcTransform(i).initial }}
            animate={{ opacity: 1, transform: calcTransform(i).final }}
            transition={{ duration: 0.4, delay: 0.07 * i, ease: "easeOut" }}
          >
            <img
              style={{ objectFit: "contain" }}
              src={e.logo}
              height={"60%"}
              width={"60%"}
            />
          </Box>
        ))}
      </Box>

      {/* center */}
      <Box
        component={motion.div}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          type: "spring",
        }}
        height={"5rem"}
        sx={{
          aspectRatio: 1,
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#FFFFFF"}
        borderRadius={"50%"}
        boxShadow={"0 2px 10px -1px #7d7d7d33"}
      >
        <Icon icon="devicon:terraform" fontSize={"2rem"} />
      </Box>
    </Box>
  );
};

export default Platform;

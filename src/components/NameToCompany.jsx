import { Icon } from "@iconify/react";
import { Box, Button, ButtonGroup, InputBase, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FullName from "./FullName";
import CompanyName from "./CompanyName";
import CompanySite from "./CompanySite";

const NameToCompany = ({ setStep, step }) => {
  const handleEnterKey = (e) => {
    if (e.key === "Enter") setStep((prev) => prev + 1);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterKey);

    return () => document.removeEventListener("keydown", handleEnterKey);
  }, []);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <Box display={"flex"} height={"100%"}>
      {step == 2 && <FullName setStep={setStep} setName={setName} />}
      {step == 3 && <CompanyName setStep={setStep} setCompany={setCompany} />}
      {step == 4 && <CompanySite setStep={setStep} setWebsite={setWebsite} />}

      <Box
        component={motion.div}
        initial={{
          y: 15,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        position={"absolute"}
        bottom={"16%"}
        right={"6rem"}
        flex={1}
        sx={{
          transform: "translateX(100px)",
        }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        justifyContent={"center"}
      >
        <Box
          component={motion.div}
          initial={{
            scale: 0.6,
            originX: 1,
            originY: 1,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            stiffness: 110,
            type: "spring",
          }}
          p={2}
          sx={{
            transition: "height 0.4s ease",
            height:
              name.length > 0
                ? company.length > 0
                  ? step == 4
                    ? "17.8rem"
                    : "16rem"
                  : "11rem"
                : "7rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          bgcolor={"#FBFAFE"}
          borderRadius={2}
        >
          {company.length > 0 && (
            <Box
              component={motion.div}
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.4,
              }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box
                height={"2.5rem"}
                width={"2.5rem"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(132,80,245,1) 0%, rgba(67,123,246,1) 100%)",
                }}
                borderRadius={"50%"}
                fontWeight={600}
                color={"#fff"}
              >
                {company.slice(0, 1).toUpperCase()}
              </Box>
              <Typography
                mt={0.4}
                fontSize={"0.9rem"}
                fontWeight={600}
                sx={{ textTransform: "capitalize", textAlign: "center" }}
              >
                {company}
              </Typography>

              {step == 4 && (
                <Typography
                fontFamily={'consolus'}
                  component={motion.p}
                  initial={{
                    y: 10,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  mt={0.4}
                  fontSize={"0.8rem"}
                  fontWeight={400}
                  sx={{ textTransform: "lowercase", textAlign: "center" }}
                  color={"#9f9f9f"}
                >
                  https://{website}
                </Typography>
              )}
            </Box>
          )}
          <Box
            mt={"auto"}
            sx={{
              width: "20rem",
              transition: "0.3s ease",
              height: name.length > 0 ? "9rem" : "100%",
              boxShadow: "0 0 15px -3px #00000015",
              p: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <Box
                height={"2rem"}
                width={"2rem"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"#FFFFFF"}
                borderRadius={"50%"}
                border={"1px solid #eee"}
              >
                <Icon icon="devicon:terraform" fontSize={"1rem"} />
              </Box>
              <Typography
                fontSize={"0.8rem"}
                p={1}
                px={2}
                bgcolor={"#F7F5F9"}
                borderRadius={8}
                sx={{
                  borderEndStartRadius: 0,
                }}
              >
                Your full name?
              </Typography>
            </Box>

            {name.length > 0 && (
              <Box
                component={motion.div}
                initial={{
                  y: 15,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.3,
                }}
                display={"flex"}
                gap={1}
                alignItems={"center"}
                ml={"auto"}
              >
                <Typography
                  fontSize={"0.8rem"}
                  p={1}
                  px={2}
                  bgcolor={"#1D1C49"}
                  borderRadius={8}
                  color={"white"}
                  sx={{
                    textTransform: "capitalize",
                    borderEndEndRadius: 0,
                  }}
                >
                  {name}
                </Typography>

                <Box
                  height={"2rem"}
                  width={"2rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"#EAE8EE"}
                  borderRadius={"50%"}
                  border={"1px solid #eee"}
                >
                  {name.slice(0, 1).toUpperCase()}
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        <Box
          mt={2}
          height={"3.3rem"}
          width={"3.3rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"#FFFFFF"}
          borderRadius={"50%"}
          boxShadow={"0 2px 10px -1px #7d7d7d33"}
        >
          <Icon icon="devicon:terraform" fontSize={"1.5rem"} />
        </Box>
      </Box>
    </Box>
  );
};

export default NameToCompany;

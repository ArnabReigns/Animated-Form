import { Box } from "@mui/material";
import React, { useState } from "react";
import TopLoading from "./components/TopLoading";
import Topbar from "./components/Topbar";
import SVG from "./assets/line.svg";
import { motion, useScroll } from "framer-motion";
import EmailForm from "./components/EmailForm";
import "./App.css";
import FullName from "./components/FullName";
import NameToCompany from "./components/NameToCompany";
import Platform from "./components/Platform";
import Products from "./components/Products";
import Final from "./components/Final";

const App = () => {
  const [step, setStep] = useState(1);

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
    <Box height={"100vh"} display={"flex"} flexDirection={"column"}>
      <TopLoading percent={(100 / 6) * (step - 1)} />
      <Box
        pt={5}
        pb={5}
        px={12}
        display={"flex"}
        flexDirection={"column"}
        flex={1}
      >
        <Topbar />
        <Box mt={5} flex={1}>
          {step == 1 && <EmailForm setStep={setStep} />}
          {step > 1 && step < 5 && (
            <NameToCompany step={step} setStep={setStep} />
          )}
          {step == 5 && <Platform setStep={setStep} />}
          {step == 6 && <Products setStep={setStep} />}
          {step == 7 && <Final setStep={setStep} />}
        </Box>
      </Box>
    </Box>
  );
};

export default App;

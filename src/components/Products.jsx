import React, { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import { Box, Button, ButtonGroup } from "@mui/material";

const Products = () => {
  const box = useRef();

  const el = [1, 2, 3, 4, 5];

  const [val, setVal] = useState(0);

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        {val}
        <Button onClick={() => setVal((p) => (p + 1) % (el.length+1))}>+1</Button>
      </Box>
      {el.map((e, i) => (
        <Box
          component={motion.div}
          animate={val == i+1 ? { x: 100 } : { x: 0 }}
          mb={1}
          key={i}
          ref={box}
          height={"100px"}
          width={"100px"}
          bgcolor={"red"}
        />
      ))}
    </Box>
  );
};

export default Products;

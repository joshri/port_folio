import React from "react";
import { motion } from "framer-motion";

export const createNameLayer = () => {
  let nameArray = [];
  const colorOptions = {
    0: "#b48d18",
    1: "#3daeff",
    2: "#bf2ed6",
    3: "#99d62e",
    4: "#d66b2e",
  };
  for (let i = 0; i <= 80; i++) {
    let style = {
      fontSize: 0,
      color: 0,
      animationDuration: 0,
      animationDelay: 0,
      rotate: 0,
      top: 0,
      left: 0,
    };
    style.fontSize = Math.floor(Math.random() * 90) + 12;
    style.color = colorOptions[Math.floor(Math.random() * 5)];
    style.animationDuration = Math.floor(Math.random() * 4) + 1;
    style.animationDelay = Math.random() * 4 + 2;
    const rotateNumber = Math.floor(Math.random() * 5);
    if (rotateNumber === 0) {
      style.rotate = -(Math.floor(Math.random() * 360) + 1);
    } else if (rotateNumber === 1) {
      style.rotate = Math.floor(Math.random() * 360) + 1;
    }
    style.top = Math.floor(Math.random() * 60) + 13.5;
    style.left = Math.floor(Math.random() * 40);
    nameArray.push(style);
  }
  return nameArray;
};

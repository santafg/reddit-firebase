// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: "#FF3C00",
  },
};

export const theme = extendTheme({ colors });

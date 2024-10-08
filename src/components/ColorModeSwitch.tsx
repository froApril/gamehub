import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" ? <Text>Light Mode</Text> : <Text>Dark Mode</Text>}
    </HStack>
  );
};

export default ColorModeSwitch;

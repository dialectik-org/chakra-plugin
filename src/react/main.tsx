// @ts-ignore
import Content from './content.md';
// @ts-ignore
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// @ts-ignore
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
// @ts-ignore
import chakraTheme from '@chakra-ui/theme'
// @ts-ignore
import ReactDOM from 'react-dom/client';
// @ts-ignore
import { FaMoon, FaSun } from "react-icons/fa";

// @ts-ignore
import React from 'react';

// @ts-ignore
[[imports]]
// @ts-ignore
const components : MDXComponents = [[getcomponents]]

const { Heading, Code, Alert, Table, Card, Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Heading,
    Code,
    Alert,
    Table,
    Card,
    Button
  },
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Page = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box position="relative" h="100vh">
      <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="xs"
        position="absolute" // Add this property
        right={4} // Add this property
        top={4}
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      />
      <Content components={ components }/>
  </Box>)
}

root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <Page />
    </ChakraBaseProvider>
  </React.StrictMode>
);
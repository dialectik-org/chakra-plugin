// @ts-ignore
import Content from './content.md';
// @ts-ignore
import { ChakraBaseProvider, extendBaseTheme, useTheme } from '@chakra-ui/react'
// @ts-ignore
import { Box, IconButton, useColorMode, ColorModeScript } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
// @ts-ignore
import chakraTheme from '@chakra-ui/theme'
// @ts-ignore
import ReactDOM from 'react-dom/client';
// @ts-ignore
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
// @ts-ignore
import React from 'react';

// @ts-ignore
[[imports]]
// @ts-ignore
const components : MDXComponents = [[getcomponents]]

const { Heading, Code, Alert, Table, Card, Button, Link, Divider, Tabs, Accordion } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Heading,
    Code,
    Alert,
    Table,
    Card,
    Button,
    Link,
    Divider,
    Tabs,
    Accordion
  },
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

type Mode = 'html' | 'h5p' | 'dev'

// @ts-ignore
const mode : Mode = [[mode]]

function isDev() : boolean {
  return mode === 'dev'
}

const DevPage = () => {
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
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
      <Content components={ components }/>
  </Box>)
}

function getInitialColorMode(mode : Mode) {
  switch(mode) {
    case 'dev' : return 'system';
    case 'h5p' : return 'light';
    case 'html': return 'system';
  }
}

root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme} >
      <ColorModeScript initialColorMode={getInitialColorMode(mode)} />
      { isDev() ? <DevPage /> : <Content components={ components }/> }
    </ChakraBaseProvider>
  </React.StrictMode>
);
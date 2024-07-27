import Box from "./components/Containers/Containers";
import { ThemeProvider } from "@mui/material";
import DarkTheme from "./components/SwithTheme/SwithTheme";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

export default function App() {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <Header />
        <Box/>
        <Todo className="flex justify-center items-center"/>
      </ThemeProvider>
    </>
  )
}
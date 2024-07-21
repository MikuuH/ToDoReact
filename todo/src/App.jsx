import { ThemeProvider } from '@mui/material/styles';
import DarkTheme from "./components/DarkTheme/DarkTheme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ToDos from "./components/ToDos/ToDos";
const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Header />
      <ToDos />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

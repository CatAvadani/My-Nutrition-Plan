import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { GlobalStyles } from "./components/styles/Global";
import { GreenShape } from "./components/styles/GreenShape.styled";
import { PinkShape } from "./components/styles/PinkShape.styled";

const theme = {
  colors: {
    header: "rgba(236,253,245,0.4)",
    footer: "transparent",
    navItem: "#6ACC01",
    text: "#000",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <GreenShape />
        <PinkShape />
        <Header />
        <MainContent />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

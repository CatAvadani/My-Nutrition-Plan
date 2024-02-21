import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styles/Global";
import { GreenShape } from "./components/styles/GreenShape.styled";
import { PinkShape } from "./components/styles/PinkShape.styled";

const theme = {
  colors: {
    header: "rgba(236,253,245,0.4)",
    footer: "#003333",
    navItem: "#6ACC01",
    text: "#fff",
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
        {/* <Container>
          <h1>hello world</h1>
        </Container> */}
      </>
    </ThemeProvider>
  );
}

export default App;

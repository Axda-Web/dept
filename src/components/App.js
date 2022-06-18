import StyledApp from "./styles/App.styled";

import NavBar from "./NavBar";
import HeroSection from "./HeroSection";


const App = () => {
  return (
    <StyledApp>
      <NavBar />
      <HeroSection />
    </StyledApp>
  );
}

export default App;

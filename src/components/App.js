import StyledApp from "./styles/App.styled";

import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import SubHeroSection from "./SubHeroSection";


const App = () => {
  return (
    <StyledApp>
      <NavBar />
      <HeroSection />
      <SubHeroSection />
    </StyledApp>
  );
}

export default App;

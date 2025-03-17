import "./index.css";
import Home from "./Components/Home/Home.jsx";
import Featured from "./Components/Featured/Featured.jsx";
import CustomArtwork from "./Components/Custom Artwork/CustomArtwork.jsx";
import FooterDesign from "./Components/FooterPage/FooterPage.jsx";

function App() {
  return (
    <>
      <Home />
      <div className="Featured-container">
        <Featured />
      </div>

      <div className="CustomArtwork-container">
        <CustomArtwork />
      </div>
      <FooterDesign/>
    </>
  );
}

export default App;

import DetailsBox from "./DetailsBox";
import ImageBox from "./ImageBox";

function HeroBox() {
  const heroStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: " 0 10rem",
  };

  return (
    <div style={heroStyle}>
      <DetailsBox />
      <ImageBox />
    </div>
  );
}

export default HeroBox;

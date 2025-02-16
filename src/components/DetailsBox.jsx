function DetailsBox() {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.8rem",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: "6.1rem",
          fontWeight: "800",
          fontFamily: "Poppins",
          color: " #000000",
        }}
      >
        YOUR FEET DESERVE THE BEST
      </p>
      <p
        style={{
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "24px",
          paddingRight: "35%",
        }}
      >
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{
            backgroundColor: "#D01C28",
            fontWeight: "600",
            fontSize: "16px",
            padding: "0.5rem 1rem",
            color: " #FFFFFF",
            border: "none",
          }}
        >
          Shop Now
        </button>
        <button
          style={{
            fontWeight: "600",
            fontSize: "16px",
            padding: "0.5rem 1rem",
            border: "2px solid  #5A5959",
            color: "#5A5959",
          }}
        >
          Category
        </button>
      </div>
      <span style={{ color: "#5A5959", fontSize: "16px" }}>
        Also Available On
      </span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <img src="flipcart.svg" alt="flipcart-image" />
        <img src="amazone.svg" alt="amazon-image" />
      </div>
    </div>
  );
}

export default DetailsBox;

function generateRandomColor() {
  const staticColors = [
    "#FF8B64",
    "#55C2E6",
    "#FF5E7D",
    "#4BCF82",
    "#7335D2",
    "#F1C75B",
  ];
  const randomIndex = Math.floor(Math.random() * staticColors.length);
  return staticColors[randomIndex];
}

export default generateRandomColor;

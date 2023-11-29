export const TextAligner = (align) => {
  switch (align) {
    case "left":
      return "text-left";
    case "right":
      return "text-right";
    case "center":
      return "text-center";
    default:
  }
};

export const ContentAligner = ({ align }) => {
  switch (align) {
    case "start":
      return "justify-start";
    case "end":
      return "justify-end";
    case "center":
      return "justify-center";
    default:
  }
};

export const ContentGap = (gap) => {
  switch (gap) {
    case "tiny":
      return "py-5";
    case "small":
      return "py-10"
    case "medium":
      return "py-20"
    case "large":
      return "py-lg"
    case "huge":
      return "py-32"
    default:
      return "py-20";
  }
}

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

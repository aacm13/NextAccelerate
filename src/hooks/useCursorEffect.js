'use client'
import { useEffect } from "react";

const useCursorEffect = () => {
  useEffect(() => {
    document.querySelector("*").classList.add("noCursor");
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "#5bc3e7",
      "#43caea",
      "#20d2ea",
      "#20d2ea",
      "#00d9e7",
      "#00d9e7",
      "#00dfe2",
      "#00dfe2",
      "#00e6da",
      "#00e6da",
      "#00ebcf",
      "#00ebcf",
      "#15f1c2",
      "#15f1c2",
      "#44f5b3",
      "#44f5b3",
      "#64f9a3",
      "#64f9a3",
      "#81fd91",
      "#81fd91",
      "#9dff7f",
      "#9dff7f",
    ];

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  });
};

export default useCursorEffect;

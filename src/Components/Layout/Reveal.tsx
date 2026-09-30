import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import type { ElementType, ImgHTMLAttributes } from "react";
import { keyframes } from "@emotion/react";

const entrance = keyframes({
  from: { opacity: 0, transform: "translateY(22px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fromLeft = keyframes({
  from: { opacity: 0, transform: "translateX(-45px)" },
  to: { opacity: 1, transform: "translateX(0)" },
});
const fromRight = keyframes({
  from: { opacity: 0, transform: "translateX(45px)" },
  to: { opacity: 1, transform: "translateX(0)" },
});

export default function Reveal({
  delay = 0,
  direction = "up",
  sx = [],
  ...props
}: BoxProps &
  Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "loading"> & {
    delay?: number;
    direction?: "up" | "left" | "right";
    component?: ElementType;
  }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const animation =
    direction === "left"
      ? fromLeft
      : direction === "right"
        ? fromRight
        : entrance;

  return (
    <Box
      {...props}
      ref={ref}
      sx={[
        ...(Array.isArray(sx) ? sx : [sx]),
        {
          opacity: visible ? 1 : 0,
          animation: visible
            ? `${animation} 1400ms cubic-bezier(.25, .1, .25, 1) ${delay}ms both`
            : "none",
          "@media (prefers-reduced-motion: reduce)": {
            opacity: visible ? 1 : 0,
            animation: visible
              ? `${fade} 1100ms ease-in-out ${delay}ms both`
              : "none",
            transform: "none",
          },
          "@media print": { opacity: 1, animation: "none", transform: "none" },
          "&:focus-within": { opacity: 1 },
        },
      ]}
    />
  );
}

import {
  FontFamily,
  fontSize,
  letterSpacing,
  lineHeight,
} from "./src/config/tailwind/fonts";
import colors from "./src/config/tailwind/colors";
import screens from "./src/config/tailwind/screens";
import spacing from "./src/config/tailwind/spacing";
import height from "./src/config/tailwind/height";
import width from "./src/config/tailwind/width";
import plugin from "tailwindcss/plugin";
import grid from "./src/config/tailwind/grid";

const generateClassUtilities = (property, classSuffix, calculation) => {
  const utilities = {};
  for (let i = 0; i <= 12; i++) {
    utilities[`.span-${classSuffix}-${i}`] = { [property]: calculation(i) };
  }
  return utilities;
};

const createGridVariables = (columns, gutter, margin) => {
  const windowWidth = "100vw";
  const gridWidth = `calc(${windowWidth} - 2 * ${margin}px)`;
  const columnWidth = `calc((${gridWidth} - (${columns} - 1) * ${gutter}px) / ${columns})`;
  return {
    "--columns": columns,
    "--gutter": `${gutter}px`,
    "--margin": `${margin}px`,
    "--grid-width": gridWidth,
    "--column": columnWidth,
  };
};

const contentPaths = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];

const config = {
  content: contentPaths,
  theme: {
    extend: {
      fontFamily: FontFamily,
      fontSize: fontSize,
      letterSpacing: letterSpacing,
      lineHeight: lineHeight,
      colors: {
        ...colors,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: { ...width },
      height: { ...height },
      spacing: { ...spacing },
      screens: { ...screens },
    },
  },
  safelist: [],
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": createGridVariables(
          grid.mobile.columns,
          grid.mobile.gutter,
          grid.mobile.margin,
        ),
        "@media (min-width: 768px)": {
          ":root": createGridVariables(
            grid.tablet.columns,
            grid.tablet.gutter,
            grid.tablet.margin,
          ),
        },
        "@media (min-width: 1440px)": {
          ":root": createGridVariables(
            grid.desktop.columns,
            grid.desktop.gutter,
            grid.desktop.margin,
          ),
        },
      });
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        ...generateClassUtilities(
          "width",
          "w",
          (i) =>
            `calc(${i} * var(--column) + ${Math.max(0, i - 1)} * var(--gutter))`,
        ),
        ...generateClassUtilities("gap", "gap-wide", (i) => i),
        ...generateClassUtilities(
          "gap",
          "gap-wider",
          (i) =>
            `calc(${i} * var(--column) + ${Math.min(12, i + 1)} * var(--gutter))`,
        ),
        ...generateClassUtilities(
          "gap",
          "gap-wide",
          (i) => `calc(${i} * var(--column) + ${i} * var(--gutter))`,
        ),
        ...generateClassUtilities(
          "width",
          "w-wider",
          (i) =>
            `calc(${i} * var(--column) + ${Math.min(12, i + 1)}* var(--gutter))`,
        ),
        ...generateClassUtilities(
          "width",
          "w-wide",
          (i) => `calc(${i} * var(--column) + ${i} * var(--gutter))`,
        ),
        ...generateClassUtilities(
          "gap",
          "gap",
          (i) =>
            `calc( ${i} * var(--column) + ${Math.max(0, i - 1)} * var(--gutter))`,
        ),
        ".margin-p-1": { padding: `var(--margin)` },
        ".margin-pt-1": { "padding-top": `var(--margin)` },
        ".px-grid": {
          paddingLeft: `var(--margin)`,
          paddingRight: `var(--margin)`,
        },
        ".gap-grid": {
          gap: `var(--gutter)`,
        },
        ".grid-container": {
          display: "block",
          margin: "0 auto",
          width: "var(--grid-width)",
        },
      });
    }),
  ],
};

export default config;

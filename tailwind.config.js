const { FontFamily, fontSize, letterSpacing, lineHeight } = import(
  "./src/config/tailwind/fonts"
);
const colors = import("./src/config/tailwind/colors");
const screens = import("./src/config/tailwind/screens");
const spacing = import("./src/config/tailwind/spacing");
const height = import("./src/config/tailwind/height");
const width = import("./src/config/tailwind/width");
const plugin = import("tailwindcss/plugin");
const grid = import("./src/config/tailwind/grid");

const createVariables = (columns, gutter, margin) => {
  const windowWidth = "100vw";
  const gridWidth = `calc(${windowWidth} - 2 * ${margin}px)`;
  const columnWidth = `(${gridWidth} - (${columns} - 1) * ${gutter}px) / ${columns}`;

  return {
    "--columns": columns,
    "--gutter": `${gutter}px`,
    "--margin": `${margin}px`,
    "--grid-width": gridWidth,
    "--column": columnWidth,
  };
};

const generateUtilities = (property, classSuffix, calcFunc) => {
  const utilities = {};
  for (let i = 0; i <= 12; i++) {
    utilities[`.span-${classSuffix}-${i}`] = { [property]: calcFunc(i) };
  }
  return utilities;
};

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
    (await plugin)(({ addBase }) => {
      addBase({
        ":root": createVariables(
          grid.mobile.columns,
          grid.mobile.gutter,
          grid.mobile.margin,
        ),
        "@media (min-width: 768px)": {
          ":root": createVariables(
            grid.tablet.columns,
            grid.tablet.gutter,
            grid.tablet.margin,
          ),
        },
        "@media (min-width: 1440px)": {
          ":root": createVariables(
            grid.desktop.columns,
            grid.desktop.gutter,
            grid.desktop.margin,
          ),
        },
      });
    }),
    (await plugin)(({ addUtilities }) => {
      addUtilities({
        ...generateUtilities(
          "width",
          "w",
          (i) =>
            `calc(${i} * var(--column) + ${Math.max(0, i - 1)} * var(--gutter))`,
        ),
        ...generateUtilities(
          "gap",
          "gap",
          (i) =>
            `calc(${Math.max(0, i - 1)} * var(--column) + ${i} * var(--gutter))`,
        ),
        ".margin-p-1": { padding: `var(--margin)` },
        ".margin-pt-1": { "padding-top": `var(--margin)` },
        ".px-grid": {
          paddingLeft: `var(--margin)`,
          paddingRight: `var(--margin)`,
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

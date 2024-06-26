const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                phone: "77vh",
                box: "33rem",
            },
            width: {
                box: "70rem",
            },
            colors: {
                leftSide: "#444444",
                rightSide: "#222222",
                header: "#f5f5f5",
                front: "#9d9d9d",
                item: "#5fa3da",
                me: "#5a8fd6",
                code: "#272822",
                codeOrange: "#f5921e",
                codeRed: "#f92672",
                codeWhite: "#f3f3ed",
                CodeGreen: "#c5bc65",
                CodeLightGreen: "#a2dc2d",
            },
            borderRadius: {
                box: "2rem",
            },
            gridTemplateColumns: {
                phone: "1fr .5fr ",
                box: ".5fr 1fr",
                contact: ".60fr 1fr",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                merriweather: ["Merriweather", "serif"],
                oswald: ["Oswald", "sans-serif"],
                code: ["Source Code Pro", "monospace"],
            },
            boxShadow: {
                box: "0px 0px 30px 10px rgba(256, 256, 256, 0.6)",
                menu: "0px 0px 5px 5px rgba(256, 256, 256, 0.6)",
                blog: "0px 0px 5px 8px rgba(256, 256, 256, 0.6)",
            },
            screens: {
                phone: { max: "640px" },
            },
        },
    },
    plugins: [],
});

module.exports = {
    theme: {
        colors: {
            transparant: 'transparant',
            primary: {
                "DEFAULT": "#D33087",
                500: "#D33087",
                400: "#F74A6E",
                300: "#FF7254",
                200: "#FF9D3F",
                100: "#FDC93A"
            },
            basic: {
                "DEFAULT": "#2D2D3B",
                700: "#2D2D3B",
                600: "#4F4F64",
                500: "#74748D",
                400: "#9C9CB5",
                300: "#C6C6DE",
                200: "#F5F5FF",
                100: "#FFFFFF"
            },
            blue: "#1CB9D6",
            graph: {
                110: "#BC0D27",
                100: "#EE3853",
                95: "#C226A3",
                90: "#9E2CBD",
                85: "#7933D8",
                80: "#533BF3",
                75: "#464FF5",
                70: "#5076DD",
                65: "#5CA5C1",
                60: "#69C2A0",
                55: "#79E0B8"
            }
        },
        fontSize: {
            h1: "2.75rem",
            h2: "2rem",
            h3: "1.5rem",
            h4: "1.25rem",
            b1: "1.125rem",
            b2: "0.875rem",
            c1: "0.6875"
        }
    },
    variants: {
        extend: {
            backgroundColor: ['hover', 'disabled'],
            borderColor: ['hover', 'disabled'],
            textColor: ['hover', 'disabled'],
        }
    },



}
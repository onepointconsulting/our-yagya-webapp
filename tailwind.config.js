const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit", // Just-In-Time Compiler,
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "425px",
      xss: "375px",
      xtra: "782px",
      smallMd: "570px",
      xlg: "1680px",
      xl3: "1284px",
      xxl: "1440px",
      ...defaultTheme.screens,
    },
    extend: {
      width: {
        128: "44px",
      },
      top: {
        "24%": "24%",
      },
      fontSize: {
        sm: [
          "11px",
          {
            lineHeight: "16px",
          },
        ],
        ms: [
          "15px",
          {
            lineHeight: "22px",
          },
        ],
        xs: [
          "9px",
          {
            lineHeight: "12px",
          },
        ],
        xss: [
          "7px",
          {
            lineHeight: "10px",
          },
        ],
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3.5rem",
      },
      colors: {
        "redfull": "#e9513d",
        "red70": "#ee7c6d",
        "red50": "#e9513d4f",
        "grayfull": "#787a7d",
        "gray70": "#7b7c7f",
        "gray40": "#f1f1f1",
        "gray50": "#e3e3e3",
        "yagya-red": "#d1232a",
        "gold1": "#bf8f23",
        "gold50": "#ecddbd",
        "darkGray": "#ebebec",
        "online-event-title": "#e4512e",
        "yagya-red-title": "#cfbd88",
        "grayDark": "#797a7e",
        "icons-color": "#999999",
        "video-pre-color": "#e9ebea",
        "filter-bg": "#f2e7d3",
        "pinkFull": "#ed7363",
        "results-for-bg": "#eddcbe",
        "social_media_btn_fac": "#3c5a98",
        "social_media_btn_twi": "#27a5f2",
        "social_media_btn_mee": "#3375ed",
        "social_media_btn_goo": "#dc483c",
        "social_media_btn_and": "#90c738",
        "social_media_btn_linkd": "#0878b7",
        "social_media_btn_spo": "#25ba56",
        "social_media_btn_hos": "#ff6c4b",
        "redD50": "#f9c9c5",
        "links_directory": "#eddcbe",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        circle: "circle",
        roman: "upper-roman",
      },
      variants: {
        position: ["responsive"],
        backgroundOpacity: ['active'],
      },
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
       },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
       }
    },
  },
};

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
        redfull: "#e9513d",
        red70: "#ee7c6d",
        red50: "#e9513d4f",
        grayfull: "#787a7d",
        gray70: "#7b7c7f",
        gray40: "#f1f1f1",
        gray50: "#e3e3e3",
        "yagya-red": "#d1232a",
        gold1: "#bf8f23",
        darkGray: "#ebebec",
        "online-event-title": "#e4512e",
        "yagya-red-title": "#cfbd88",
        grayDark: "#797a7e",
        footer_bg: "#949599",
        "yagya-red-sub-nav-2": "#f5a8a0",
        "yagya-sidebar-color": "#ebebed",
        yagya_sidebar_filter_color: "#7b7b7d",
        "icons-color": "#999999",
        "specia-days-color": "#e84f3c",
        "specia-days-title-color": "#c7a528",
        "speakers-time-color": "#898989",
        "video-pre-color": "#e9ebea",
        "filter-bg": "#f2e7d3",
        "results-for-bg": "#eddcbe",
        "red70": "#e9513c",
        share_btn_e: "#dabd7b",
        social_media_btn_fac: "#3c5a98",
        social_media_btn_twi: "#27a5f2",
        social_media_btn_mee: "#3375ed",
        social_media_btn_goo: "#dc483c",
        social_media_btn_and: "#90c738",
        social_media_btn_linkd: "#0878b7",
        social_media_btn_spo: "#25ba56",
        social_media_btn_hos: "#ff6c4b",
        class_detail: "#f1f1f3",
        class_detail_sub_nav: "#e89295",
        home_resource: "#f29689",
        home_page_top_bg: "#f9c9c5",
        home_page_events_card_bg: "#ebecee",
        home_page_center_meniu: "#fbdcd9",
        links_directory: "#eddcbe",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        circle: "circle",
        roman: "upper-roman",
      },
      variants: {
        backgroundColor: ['responsive', 'odd', 'even', 'hover', 'focus'],
      },
    },
  },
};

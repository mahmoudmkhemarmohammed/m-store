/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      position: {
        topNav: "130px"
      },
      height: {
        heightSlider: "550px",
        heightNav: "calc(100vh - 146px)",
        heightSliderGrid: "900px",
      },
      fontSize: {
        fontSm: "15px",
        fontSmBuleets : "10px",
        swiperButton: "10px !important"
      },
      gridTemplateColumns: {
        gridTemCols : "repeat(auto-fill, minmax(300px , 1fr))",
        gridTemColsFot : "repeat(auto-fill, minmax(280px , 1fr))"
      },
      borderWidth: {
        bordIcon: "6px",
        bordFoot : "1px"
      },
      borderColor: {
        bordIconColor: "gray"
      }
    }
  },
  plugins: [],
}
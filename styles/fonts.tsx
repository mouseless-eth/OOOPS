import { Global } from "@emotion/react";

const Fonts = () => {
  <Global
    styles={`
      @font-face {
        font-family: lust,serif;
        font-weight: 700;
        font-style: normal;
        src: url('https://use.typekit.net/kbj5erb.css')
      }
    `}
  />
}

export default Fonts;

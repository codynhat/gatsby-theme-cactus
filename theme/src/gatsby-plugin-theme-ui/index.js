/* Override this file completely by shadowing it.
  Or override certain details by merging this exported default with your custom settings, as shown in the demo
  https://theme-ui.com/packages/gatsby-plugin
 */

import tailwind from "@theme-ui/preset-tailwind";
import colors from "./colors";
import solarizedlight from "@theme-ui/prism/presets/prism-solarizedlight.json";

export default {
  useColorSchemeMediaQuery: true,
  useLocalStorage: false,
  ...tailwind,
  colors,
  fonts: {
    ...tailwind.fonts,
    body: `Verdana,Helvetica,Arial,sans-serif`,
  },
  lineHeights: {
    body: `1.725`,
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      mx: `auto`,
      maxWidth: `48rem`,
      px: 4,
      height: "100%",
      fontSize: 14,
    },
    code: {
      ...solarizedlight,
      backgroundColor: `codeBackground`,
      color: `text`,
      overflow: `scroll`,
    },
    p: {
      textAlign: `justify`,
      hyphens: `auto`,
      code: {
        ...solarizedlight,
        backgroundColor: `codeBackground`,
        color: `text`,
      },
      a: {
        ":hover": {
          textDecoration: `none`,
        },
      },
    },
    li: {
      code: {
        ...solarizedlight,
        backgroundColor: `codeBackground`,
        color: `text`,
      },
    },
  },
  layout: {
    pageWrapper: {
      position: `relative`,
      py: 5,
      display: `flex`,
      flexDirection: `column`,
      minHeight: `100%`,
      overflowWrap: `break-word`,
      textRendering: `geometricPrecision`,
      fontSmooth: `grayscale`,
      MozOsxFontSmoothing: `grayscale`,
      WebkitFontSmoothing: `antialiased`,
    },
    header: {
      margin: `0 auto 2rem`,
      width: `100%`,
      display: `grid`,
      gridTemplateColumns: `75px auto`,
      gridTemplateRows: `repeat(2,1fr)`,
      gridColumnGap: 3,
      gridRowGap: 1,
      ":hover": {
        ".logo": {
          svg: {
            filter: `none`,
          },
        },
      },
      ".logo": {
        gridRow: `span 2`,
        width: 75,
        height: 75,
        svg: {
          width: `100%`,
          height: `100%`,
          filter: `grayscale(100%)`,
        },
      },
      nav: {
        gridColumn: 2,
        alignSelf: `start`,
        lineHeight: `15px`,
        letterSpacing: `0.01em`,
        fontSize: `0.8rem`,
        fontWeight: `200`,
        fontStyle: `normal`,
        span: {
          display: `inline-block`,
          marginRight: 3,
          borderRight: `1px dotted`,
          borderRightColor: `primary`,
          ":last-of-type": {
            borderRight: 0,
          },
        },
        a: {
          marginRight: 3,
          color: `primary`,
          textDecoration: `none`,
        },
      },
      h1: {
        margin: 0,
        padding: 0,
        letterSpacing: `0.01em`,
        fontWeight: 700,
        fontStyle: `normal`,
        fontSize: 3,
        lineHeight: `2rem`,
      },
      li: {
        display: `inline-block`,
      },
    },
    main: {
      a: {
        color: `text`,
        textDecoration: `none`,
      },
      hr: {
        border: `1px dashed #b58900`,
        display: `block`,
        my: 4,
      },
    },
    index: {
      ul: {
        margin: 0,
        padding: 0,
        li: {
          listStyleType: `none`,
        },
      },
    },
    note: {
      ".meta": {
        display: `flex`,
        flexDirection: [`column`, `row`],
        alignItems: [`flex-start`, `center`],
        span: {
          mx: 2,
          display: [`none`, `initial`],
        },
        ".tags": {
          display: `flex`,
          alignItems: `center`,
          ul: {
            ml: 2,
            display: `flex`,
            flexWrap: `wrap`,
            li: {
              mr: 2,
            },
          },
        },
        ul: {
          margin: 0,
          padding: 0,
          li: {
            listStyleType: `none`,
          },
        },
      },
      ".md-body": {
        mt: 4,
        h1: {
          mt: 4,
          mb: 2,
          position: `relative`,
          color: `accent`,
          fontSize: 4,
        },
        h2: {
          mt: 4,
          mb: 2,
          position: `relative`,
          color: `accent`,
          fontSize: 2,
        },
        h3: {
          mt: 4,
          mb: 2,
          position: `relative`,
          color: `text`,
          fontSize: 1,
          textDecoration: `underline`,
        },
        pre: {
          my: 4,
          px: 3,
          py: 2,
          borderRadius: 3,
        },
        blockquote: {
          my: 0,
          mx: 2,
          py: 2,
          px: 3,
          width: `80%`,
          textAlign: `left`,
          color: `secondary`,
          fontWeight: `bold`,
          quotes: `"\\201C" "\\201D" "\\2018" "\\2019"`,
          "::before": {
            verticalAlign: `-0.4em`,
            lineHeight: `0.1em`,
            content: `"\\201C"`,
            fontSize: 3,
          },
          p: {
            m: 0,
          },
        },
        a: {
          color: `secondary`,
          textDecoration: `underline`,
        },
      },
    },
    notes: {
      ul: {
        margin: 0,
        padding: 0,
        li: {
          listStyleType: `none`,
        },
      },
    },
    footer: {
      position: `absolute`,
      bottom: 0,
      width: `100%`,
      marginBottom: 3,
      display: `flex`,
      flexDirection: [`column`, `row`],
      justifyContent: [`center`, `space-between`],
      alignItems: `center`,
      color: `tertiary`,
      verticalAlign: `top`,
      textAlign: `center`,
      fontSize: `11px`,
      div: {
        marginRight: [0, 3],
      },
      nav: {
        display: `flex`,
        span: {
          display: `inline-block`,
          marginRight: 3,
          borderRight: `1px solid`,
          borderColor: `tertiary`,
          verticalAlign: `middle`,
          ":last-of-type": {
            marginRight: 0,
            borderRight: 0,
            a: {
              marginRight: 0,
            },
          },
          a: {
            marginRight: 3,
            color: `tertiary`,
            textDecoration: `underline`,
            ":hover": {
              color: `#858585`,
            },
          },
        },
      },
    },
  },
  links: {
    secondary: {
      color: `text`,
      textDecoration: `none`,
      display: `inline-block`,
    },
    social: {
      ":hover": {
        color: `secondary`,
      },
    },
  },
  title: {
    color: `primary`,
    marginTop: 5,
    marginBottom: 3,
    letterSpacing: `0.01em`,
  },
};

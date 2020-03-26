import { ThemeProvider, createGlobalStyle } from 'styled-components'
// import Navbar from './navigation/Navbar'
// import Foot from './footer/Foot'
export default function Layout(props) {

    const theme = {
        color: '#EFEFEF',
        pad: '2em 5em',
        padMobile: '2em',
        sizes: {
            bigDesktop: '(min-width: 3000px)',
            mobile: '(max-width:464px)',
            tablet: '(max-width: 1023px)',
            landscape: '(max-width: 850px) and (orientation: landscape)'
        },
        flex: () => (`
            display: -webkit-box;
            display: -moz-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
        `),
        flexFlow: val => (`
            -webkit-flex-flow: ${val};
            -ms-flex-flow: ${val};
            flex-flow: ${val};
        `),
        justifyContent: val => {
            let toRet = `
            -webkit-justify-content: ${val};
            justify-content: ${val};
            `

            switch (val) {
                case 'flex-start':
                    toRet = `
                        ${toRet}
                        -webkit-box-pack: start;
                        -moz-box-pack: start;
                        -ms-flex-pack: start;
                    `
                    break
                case 'flex-end':
                    toRet = `
                        ${toRet}
                        -webkit-box-pack: end;
                        -moz-box-pack: end;
                        -ms-flex-pack: end;
                    `
                    break
                case 'space-between':
                    toRet = `
                        ${toRet}
                        -webkit-box-pack: justify;
                        -moz-box-pack: justify;
                        -ms-flex-pack: justify;
                    `
                    break
                case 'space-around':
                    toRet = `
                        ${toRet}
                        -ms-flex-pack: distribute;
                    `
                    break
                default:
                    toRet = `
                        ${toRet}
                        -webkit-box-pack: ${val};
                        -moz-box-pack: ${val};
                        -ms-flex-pack: ${val};
                    `
                    break
            }

            return toRet
        },
        alignItems: val => {
            let toRet = `
                -webkit-align-items: ${val};
                align-items: ${val};
            `

            switch (val) {
                case 'flex-start':
                    toRet = `
                        ${toRet}
                        -webkit-box-align: start;
                        -moz-box-align: start;
                        -ms-flex-align: start;
                    `
                    break
                case 'flex-end':
                    toRet = `
                        ${toRet}
                        -webkit-box-align: end;
                        -moz-box-align: end;
                        -ms-flex-align: end;
                    `
                    break
                default:
                    toRet = `
                        ${toRet}
                        -webkit-box-align: ${val};
                        -moz-box-align: ${val};
                        -ms-flex-align: ${val};
                    `
                    break
            }
            return toRet
        },
        alignSelf: val => {
            let toRet = `
                -webkit-align-self: ${val};
                align-self: ${val};
            `

            switch (val) {
                case 'flex-start':
                    toRet = `
                        ${toRet}
                        -ms-flex-item-align: start;
                    `
                    break
                case 'flex-end':
                    toRet = `
                        ${toRet}
                        -ms-flex-item-align: end;
                    `
                    break
                default: 
                    toRet = `
                        ${toRet}
                        -ms-flex-item-align: ${val};
                    `
                    break
            }

            return toRet
        },
        center: () => (`
            display: flex;
            justify-content: center;
            align-items: center;
        `),
        fitContainer: () => (`
            height: 100%;
            width: 100%;
        `)
    }

    const Global = createGlobalStyle`

      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      html {
          font-size: 1em;
      }

      body {
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
      }

      h1, h2, h3, h4, h5, h6 {
          font-weight: 200;
      }

      ${'' /* div {
          border: 1px solid #fff;
      } */}
    `

    return (
        <div>
            <Global />
            <ThemeProvider theme={theme}>
                {/* <Navbar /> */}
                {props.children}
                {/* <Foot /> */}
            </ThemeProvider>
        </div>
    )
}

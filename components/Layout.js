import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Nav from './basics/Nav'
import Footer from './basics/Footer'
import React, { useEffect } from 'react'
// import Navbar from './navigation/Navbar'
// import Foot from './footer/Foot'
export default function Layout(props) {

    const theme = {
        color: '#EFEFEF',
        colorTransparent: '#C4C4C4',
        footColor: '#434343',
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
        flexOrder: int => (`
            -webkit-box-ordinal-group: ${int + 1};
            -moz-box-ordinal-group: ${int + 1};
            -webkit-order: ${int};
            -ms-flex-order: ${int};
            order: ${int};
        `),
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

      body {
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        font-size: 100%;
      }

      h1 {
          font-size: 3rem;
      }

      h2 {
          font-size: 2.5rem;
      }

      h3 {
          font-size: 2rem;
      }

      h4 {
          font-size: 1.5rem;
      }

      h5 {
          font-size: 1rem;
      }

      h6 {
          font-size: 0.5rem;
      }

      h1, h2, h3, h4, h5, h6 {
          font-weight: 200;
      }

      @media only screen and (max-width: 1023px) {

        h1 {
          font-size: 2.8rem;
        }

        h2 {
            font-size: 2.3rem;
        }

        h3 {
            font-size: 1.8rem;
        }

        h4 {
            font-size: 1.3rem;
        }

        h5 {
            font-size: 0.8rem;
        }

        h6 {
            font-size: 0.5rem;
        } 
      }

      @media only screen and (max-width:464px) {

        h1 {
          font-size: 2.3rem;
        }

        h2 {
            font-size: 1.9rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        h4 {
            font-size: 1rem;
        }

        h5 {
            font-size: 0.6rem;
        }

        h6 {
            font-size: 0.3rem;
        } 
      }

      ${'' /* div {
          border: 1px solid #fff;
      } */}
    `

    const checkTouch = () => {
        // const touchsupport = ('ontouchstart' in React.window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
        // if (!touchsupport){ // browser doesn't support touch
        //     document.documentElement.className += " non-touch"
        // }

        // console.log(touchsupport)
        document.documentElement.classList += ' no-touch'
        document.addEventListener('touchstart', () => {
            document.documentElement.classList -= ' no-touch'
        }, () => {
            document.removeEventListener('touchstart')
        })

    }

    useEffect(() => {
        checkTouch()
    })
    
    return (
        <div>
            <Global />
            <ThemeProvider theme={theme}>
                <Nav />
                {props.children}
                <Footer />
            </ThemeProvider>
        </div>
    )
}

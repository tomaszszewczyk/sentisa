import {createTheme} from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

const breakpointsTheme = createTheme({
    breakpoints: {
        values: {
            sm: 0,
            md: 744,
            lg: 1024,
            xl: 1200,
        }
    }
})

export const greenColor = '#4BF59A'

export const theme = createTheme( {
    breakpoints: {
        values: {
            sm: 0,
            md: 744,
            lg: 1024,
            xl: 1200,
        }
    },
    typography: {
        h1: {
            fontFamily: 'Roboto',
            fontWeight: '500',
            fontSize: '80px',
            [breakpointsTheme.breakpoints.down('lg')]: {
                fontSize: '44px',
            },
        },
        h2: {
            fontFamily: 'Roboto',
            fontWeight: '600',
            letterSpacing: '10px',
            textTransform: 'uppercase',
            fontSize: '80px',
            [breakpointsTheme.breakpoints.down('md')]: {
                fontSize: '32px',
                letterSpacing: '5px',
            },
        },
        h3: {
            fontFamily: 'Roboto',
            fontWeight: '700',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontSize: '20px',
            [breakpointsTheme.breakpoints.down('md')]: {
                fontSize: '16px',
                letterSpacing: '1px',
            },
        },
        h5: {
            fontFamily: 'Roboto',
        },
        h6: {
            fontFamily: 'Roboto',
            fontSize: '30px',
            fontWeight: '600'
        },
        subtitle1: {
            fontFamily: 'Roboto',
            fontWeight: '400',
            fontSize: '16px'
        },
        body1: {
            fontFamily: 'Roboto',
            fontWeight: '300',
            fontSize: '18px'
        },
        body2: {
            fontFamily: 'Roboto',
            fontWeight: '300',
            fontSize: '24px',
            [breakpointsTheme.breakpoints.down('md')]: {
                fontSize: '16px',
            },
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: greenColor
        },
        background: {
            default: '#0f0f0f',
            paper: '#0f0f0f',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {

            },
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    ':focus': {
                        outline: 'white solid 2px',
                        outlineOffset: '3px',
                    }
                },
                contained: {

                },
                text: {

                }
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    ':focus': {
                        outline: 'white solid 2px',
                        outlineOffset: '6px',
                        borderRadius: '2px',
                    }
                }
            }
        },
        MuiCard: {
            defaultProps: {
                variant: 'outlined',
            },
            styleOverrides: {
                root: {

                }
            }
        }
    }
})

export const footerTheme = createTheme(theme, {
    typography: {
        body1: {
            color: 'white'
        },
        h5: {
            color: 'white'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    borderRadius: '0px',
                    ':focus': {
                        outline: 'white solid 2px',
                        outlineOffset: '3px',
                        borderRadius: '2px',
                    }
                },
                contained: {
                    color: 'white',
                }
            }
        },
    }
})

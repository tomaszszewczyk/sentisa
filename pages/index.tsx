import type {NextPage} from 'next'
import {ThemeProvider} from "@mui/material/styles"
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {CssBaseline} from "@mui/material";
import {Hero} from "../components/pages/Hero";
import {Process} from "../components/process/Process";
import {Partners} from "../components/pages/Partners";
import {Footer} from "../components/pages/Footer";

const Home: NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HtmlHead
                title={'Sentisa - Your product, Our technology'}
                description={
                    'At Sentisa we offer an idea to product support for our customers. With passion we continue ' +
                    'not only to develop tailor made solutions which include: electronics hardware, embedded software, ' +
                    'user application – but also delivering fully tested and ready to use electronics for OEMs.'
                }/>
            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <Hero/>
                <Process/>
                <Partners/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export default Home

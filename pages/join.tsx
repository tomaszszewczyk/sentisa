import {NextPage} from "next";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {ThemeProvider} from "@mui/material/styles";
import {Footer} from "../components/pages/Footer";
import {CssBaseline} from "@mui/material";
import {JoinUsHero} from "../components/pages/JoinUsHero";
import {Join} from "../components/pages/Join";

const ContactPage: NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HtmlHead
                title={'Sentisa - Join us'}
                description={'Let\'s join our team'}/>
            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <JoinUsHero/>
                <Join/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export default ContactPage

import {NextPage} from "next";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {ThemeProvider} from "@mui/material/styles";
import {ContactHero} from "../components/pages/ContactHero";
import {Contact} from "../components/pages/Contact";
import {Footer} from "../components/pages/Footer";
import {CssBaseline} from "@mui/material";

const ContactPage: NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HtmlHead
                title={'Sentisa - Contact'}
                description={'Let\'s get in touch'}/>
            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <ContactHero/>
                <Contact/>
                <iframe
                    title='Podgląd adresu w mapach Google Maps'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.9327541094526!2d19.8915819!3d50.06882100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bc0db80b515%3A0xbf7dfd8c9d1b987!2sBr%C4%85zownicza%204%2C%2033-332%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1653900558984!5m2!1spl!2spl"
                    loading="lazy"
                    style={{height: '500px', width: '100%', border: 'none', paddingTop: '100px'}}
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export default ContactPage

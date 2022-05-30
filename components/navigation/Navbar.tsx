import {Stack} from "@mui/material";
import {ImageLink} from "./ImageLink";
import logo from "../../public/img/logo.svg";
import {Navigation} from "./Navigation";
import {Container} from "@mui/material";
import {Box} from "@mui/system";

export const Navbar = () => {
    return (
        <Box>
            <Container maxWidth={'xl'}>
                <Stack direction={'row'} justifyContent={'space-between'} pt={'32px'} pb={'32px'} alignItems={'center'}>
                    <Box maxWidth={'150px'}>
                        <ImageLink label={'Przejdź na stronę główną'}
                                   src={logo}
                                   alt={'Logo Sentisa'}
                                   url={'/'}/>
                    </Box>
                    <Navigation links={[
                        {href: '/portfolio', children: 'Portfolio'},
                        {href: '/join', children: 'Join us'},
                        {href: '/contact', children: 'Contact', variant: 'contained'},
                    ]}/>
                </Stack>
            </Container>
        </Box>
    )
}

import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {ImageLink} from "../navigation/ImageLink";
import bbLogo from '../../public/img/logo_white.svg'
import logo from "../../public/img/logo.svg";
import Image from 'next/image'

const Contents = () => {
    return (
        <Stack gap={'64px'}>
            <Grid container columns={12} spacing={'32px'} alignItems={'center'}>
                <Grid item lg={12} md={3} sm={6}>
                    <Image src={logo}
                           alt={'Logo Sentisa'}/>
                </Grid>
                <Grid item lg={4} md={12} sm={12}>
                    <Stack>
                        <Typography component={'h3'} variant={'h5'}>Sentisa sp. z o. o.</Typography>
                        <Typography>ul. Brązownicza 4 30-142 Kraków</Typography>
                    </Stack>
                </Grid>
                <Grid item lg={4} md={3} sm={6}>
                    <Typography component={'h3'} variant={'h5'}>Phone</Typography>
                    <Typography>+48 501 314 390</Typography>
                </Grid>
                <Grid item lg={4} md={3} sm={6}>
                    <Typography component={'h3'} variant={'h5'}>Email</Typography>
                    <Typography>biuro@sentisa.com</Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent={'center'} spacing={'8px'}>
                <Grid item>
                    <Typography sx={{textAlign: 'center'}}>
                        Zaprojektowane i wdrożone przez
                    </Typography>
                </Grid>
                <Grid item>
                    <ImageLink label={'Przejdź na stronę bluesBrackets'} src={bbLogo} alt={'Blues Brackets logo'}
                               url={'https://bluesbrackets.com'}/>
                </Grid>
            </Grid>
        </Stack>
    )
}

export const Footer = () => {
    return (
        <Box>
            <Container maxWidth={'xl'} sx={{pt: '100px', pb: '64px'}}>
                <Contents/>
            </Container>
        </Box>
    )
}
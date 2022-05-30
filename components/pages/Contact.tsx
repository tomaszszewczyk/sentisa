import {Button, Container, FormControl, Grid, Input, InputLabel, Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import logo from "../../public/img/logo.svg";

const Form = () => {
    return (
        <Stack id='contact-form' gap={'32px'} component={'form'}>
            <FormControl>
                <InputLabel htmlFor="name-input" id='name-input-label'>Company Name</InputLabel>
                <Input id="name-input" aria-describedby="name-input-label"/>
            </FormControl>

            <Stack direction={'row'} gap={'32px'}>
                <FormControl sx={{flex: 2}}>
                    <InputLabel htmlFor="address-input" id='address-input-label'>Address</InputLabel>
                    <Input id="address-input" aria-describedby="address-input-label"/>
                </FormControl>

                <FormControl sx={{flex: 1}}>
                    <InputLabel htmlFor="postal-input" id='postal-input-label'>Postal code</InputLabel>
                    <Input id="postal-input" aria-describedby="postal-input-label"/>
                </FormControl>
            </Stack>

            <FormControl>
                <InputLabel htmlFor="contact-name-input" id='contact-name-input-label'>Name</InputLabel>
                <Input id="contact-name-input" aria-describedby='contact-name-input-label'/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="phone-input" id='phone-input-label'>Phone</InputLabel>
                <Input id="phone-input" aria-describedby='phone-input-label'/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="email-input" id='email-input-label'>Email address</InputLabel>
                <Input id="email-input" aria-describedby="email-input-label"/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="message-input" id='message-input-label'>Message</InputLabel>
                <Input id="message-input" aria-describedby='message-input-label'/>
            </FormControl>

            <Button id="send-form" variant={'contained'}>Send</Button>
        </Stack>
    )
}

const Data = () => {
    return (
        <Stack gap={'32px'} maxWidth={'400px'}>
            <Stack gap={'16px'}>
                <Typography component={'h2'} variant={'h5'}>Company details</Typography>
                <Typography component={'p'} variant={'body1'}>
                    Sentisa sp. z o. o.
                </Typography>
                <Typography component={'p'} variant={'body1'}>
                    NIP 6772390346<br/>
                    REGON 361936012<br/>
                    KRS 0000564841<br/>
                    Phone +48 501 314 390<br/>
                </Typography>
                <Typography component={'p'} variant={'body1'}>
                    ul. Brązownicza 4 30-142 Kraków
                </Typography>

                <Box pt={'32px'}>
                    <Image src={logo}
                           alt={'Logo Sentisa'}/>
                </Box>
            </Stack>
        </Stack>
    )
}

export const Contact = () => {
    return (
        <Box pt={'64px'}>
            <Container maxWidth={'xl'}>
                <Grid container spacing={'128px'}>
                    <Grid item sm={12} md={6}>
                        <Form/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Data/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

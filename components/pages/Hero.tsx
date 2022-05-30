import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/material";
import Image from 'next/image.js'
import heroPicture from '../../public/img/hero.png'
import {ButtonLink} from "../navigation/ButtonLink";

const Slogan = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Typography variant={'h1'} minWidth={small ? 0 : 410}>
            <span style={{display: 'block'}}>Your Product</span>
            <span style={{display: 'block', color: theme.palette.secondary.main}}>Our Technology</span>
        </Typography>
    )
}

const Comment = () => {
    return (
        <Typography component={'p'} variant={'subtitle1'}>
            At Sentisa we offer an idea to product support for our customers. With passion we continue not only to
            develop tailor made solutions, but also to deliver fully tested and ready to use electronics for OEMs.
        </Typography>
    )
}

const CTA = () => {
    return (
        <Box>
            <ButtonLink href={'/contact#contact-form'} variant={'contained'}>
                {'Contact'}
            </ButtonLink>
        </Box>
    )
}

const Picture = () => {
    return (
        <Box flexShrink={0}
             sx={{}}
        >
            <Image src={heroPicture} alt={'Insides of a computer'}/>
        </Box>
    )
}

export const Hero = () => {
    return (
        <Container maxWidth={'xl'}>
            <Stack pt={{sm: '50px', lg: '150px'}}
                   direction={{sm: 'column', md: 'row'}}
                   alignItems={{sm: 'flex-start', md: 'center'}}
                   gap={'32px'}
                   justifyContent={'space-between'}>
                <Stack gap={'32px'} order={2} flex={1} maxWidth={'550px'}>
                    <Slogan/>
                    <Comment/>
                    <CTA/>
                </Stack>

                <Box order={{sm: 1, md: 3}} flex={1} maxWidth={'500px'} alignSelf={'center'}>
                    <Picture/>
                </Box>
            </Stack>
        </Container>
    )
}

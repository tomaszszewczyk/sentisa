import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/material";
import Image from 'next/image.js'
import heroPicture from '../../public/img/hero.svg'
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
            <ButtonLink href={'/kontakt#contact-form'} variant={'contained'}>
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
            <Image src={heroPicture} alt={'Stanowsko pracy księgowego'}/>
        </Box>
    )
}

export const Hero = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Container maxWidth={'xl'}>
            <Stack pt='150px' direction={small ? 'column' : 'row'} alignItems={'center'} gap={small ? '32px' : '0'}>
                <Stack gap={'32px'} order={2} flex={1}>
                    <Slogan/>
                    <Comment/>
                    <CTA/>
                </Stack>

                <Box order={small ? 1 : 3} flex={1}>
                    <Picture/>
                </Box>
            </Stack>
        </Container>
    )
}

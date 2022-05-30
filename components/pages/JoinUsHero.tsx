import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material";

export const JoinUsHero = () => {
    return (
        <Container maxWidth={'xl'}>
            <Stack pt='100px'>
                <Typography variant={'h1'}>
                    Join Us
                </Typography>
                <Typography variant={'body2'}>
                    In SENTISA we develop and bring to life the technology of tomorrow.
                </Typography>
            </Stack>
        </Container>
    )
}

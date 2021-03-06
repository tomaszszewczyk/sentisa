import {Container, Stack, Typography} from "@mui/material";

export const PortfolioHero = () => {
    return (
        <Container maxWidth={'xl'}>
            <Stack pt='100px'>
                <Typography variant={'h1'}>
                    Portfolio
                </Typography>
                <Typography variant={'body2'}>
                    In SENTISA we develop and bring to life the technology of tomorrow.
                </Typography>
            </Stack>
        </Container>
    )
}

import {Box, Container, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Research} from "./Research";
import {Development} from "./Development";
import {Manufacturing} from "./Manufacturing";

export const Process = () => {
    const theme = useTheme()

    return (
        <Box pt={{md: '128px', sm: '64px'}}>
            <Container maxWidth={'xl'} sx={{
                [theme.breakpoints.down('md')]: {
                    pl: '4px'
                }
            }}>
                <Stack gap={{md: '128px', sm: '48px'}}>
                    <Typography variant={'h2'} textAlign={'center'}>Process</Typography>
                    <Research/>
                    <Development/>
                    <Manufacturing/>
                </Stack>
            </Container>
        </Box>
    )
}

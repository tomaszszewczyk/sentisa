import {Box, Container, Stack, Typography} from "@mui/material";
import {Research} from "./Research";
import {Development} from "./Development";
import {Manufacturing} from "./Manufacturing";

export const Process = () => {
    return (
        <Box pt={'128px'}>
            <Container maxWidth={'xl'}>
                <Stack gap={'128px'}>
                    <Typography variant={'h2'} textAlign={'center'}>Process</Typography>
                    <Research/>
                    <Development/>
                    <Manufacturing/>
                </Stack>
            </Container>
        </Box>
    )
}

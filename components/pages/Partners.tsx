import {Box, Card, Container, Grid, Stack, Typography} from "@mui/material";
import glokLogo from '../../public/img/partners/glok.png'
import lavaLogo from '../../public/img/partners/lava.png'
import realLogo from '../../public/img/partners/real.png'
import termLogo from '../../public/img/partners/termoplus.png'
import walaLogo from '../../public/img/partners/wala.png'
import Image from 'next/image'
import {FC, ReactNode} from "react";

const GreyCard: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <Card sx={{p: '32px', bgcolor: 'grey', height: '100%', border: 'none'}}>
            <Stack justifyContent={'center'} height={'100%'}>
                {children}
            </Stack>
        </Card>
    )
}

export const Partners = () => {
    return (
        <Box pt={'128px'}>
            <Container maxWidth={'xl'}>
                <Stack gap={'64px'}>
                    <Typography variant={'h2'} textAlign={'center'}>Partners</Typography>
                    <Grid columns={30} container spacing={'16px'}>
                        <Grid item lg={6}>
                            <GreyCard>
                                <Image src={lavaLogo} alt={'G-LOK logo'}/>
                            </GreyCard>
                        </Grid>

                        <Grid item lg={6}>
                            <GreyCard>
                                <Image src={realLogo} alt={'G-LOK logo'}/>
                            </GreyCard>
                        </Grid>

                        <Grid item lg={6}>
                            <GreyCard>
                                <Image src={glokLogo} alt={'G-LOK logo'}/>
                            </GreyCard>
                        </Grid>

                        <Grid item lg={6}>
                            <GreyCard>
                                <Image src={termLogo} alt={'G-LOK logo'}/>
                            </GreyCard>
                        </Grid>

                        <Grid item lg={6}>
                            <GreyCard>
                                <Image src={walaLogo} alt={'G-LOK logo'}/>
                            </GreyCard>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}

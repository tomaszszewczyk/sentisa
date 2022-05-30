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
        <Card sx={{p: '32px', bgcolor: 'grey', border: 'none', filter: 'grayscale(80%)'}}>
            <Stack justifyContent={'center'} width={'150px'}>
                {children}
            </Stack>
        </Card>
    )
}

export const Partners = () => {
    return (
        <Box pt={{md: '128px', sm: '128px'}}>
            <Container maxWidth={'xl'}>
                <Stack gap={'64px'}>
                    <Typography variant={'h2'} textAlign={'center'}>Partners</Typography>
                    <Stack direction={'row'} gap={'16px'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
                        <GreyCard>
                            <Image src={lavaLogo} alt={'Lava logo'}/>
                        </GreyCard>

                        <GreyCard>
                            <Image src={realLogo} alt={'Realresearch logo'}/>
                        </GreyCard>

                        <GreyCard>
                            <Image src={glokLogo} alt={'G-LOK logo'}/>
                        </GreyCard>

                        <GreyCard>
                            <Image src={termLogo} alt={'G-LOK logo'}/>
                        </GreyCard>

                        <GreyCard>
                            <Image src={walaLogo} alt={'G-LOK logo'}/>
                        </GreyCard>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

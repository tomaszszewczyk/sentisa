import {Grid, Stack, Typography} from "@mui/material";
import {VerticalHeader} from "./VertivalHeader";

export const Development = () => {
    const tags = [
        'GPS Tracking', 'Wearables', 'Telemetry', 'Access control', 'USB', 'CAN', 'Ethernet', 'RS232', 'RS485',
        'Modbus', 'Windows', 'Linux', 'iOS', 'Android', 'nRF52', 'STM32', 'NB-IoT', 'LTE Cat-M', 'SigFox', 'Bluetooth',
        'WiFi', 'Lowe Power Systems'
    ]

    return (
        <Stack direction={'row'} gap={'128px'} alignItems={'center'}>
            <VerticalHeader text={'development'}/>
            <Stack alignItems={'center'} width={'100%'} gap={'64px'}>
                <Grid container>
                    <Grid item md={4}>
                        <Typography variant={'h3'}
                                    component={'p'}
                                    textAlign={'center'}>
                            Electronics<br/>hardware
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant={'h3'}
                                    component={'p'}
                                    textAlign={'center'}>
                            Embedded<br/>firmware
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant={'h3'}
                                    component={'p'}
                                    textAlign={'center'}>
                            PC/Mobile<br/>software
                        </Typography>
                    </Grid>
                </Grid>

                <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} rowGap={'32px'} columnGap={'128px'}>
                    {tags.map(t => (
                        <Typography key={t} variant={'body2'}>{t}</Typography>
                    ))}
                </Stack>

                <Stack alignItems={'center'}>
                    <Typography variant={'h3'}>
                        Sentisa cross platform framework
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

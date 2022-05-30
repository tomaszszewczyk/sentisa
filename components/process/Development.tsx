import {Grid, Stack, Typography} from "@mui/material";
import {VerticalHeader} from "./VertivalHeader";

export const Development = () => {
    const tags = [
        'GPS Tracking', 'Wearables', 'Telemetry', 'Access control', 'USB', 'CAN', 'Ethernet', 'RS232', 'RS485',
        'Modbus', 'Windows', 'Linux', 'iOS', 'Android', 'nRF52', 'STM32', 'NB-IoT', 'LTE Cat-M', 'SigFox', 'Bluetooth',
        'WiFi', 'Lowe Power Systems'
    ]

    return (
        <Stack direction={'row'} gap={{lg: '128px', md: '64px', sm: '16px'}} alignItems={'center'}>
            <VerticalHeader text={'development'}/>
            <Stack alignItems={'center'} width={'100%'} gap={{md: '64px', sm: '32px'}}>
                <Grid container spacing={'16px'}>
                    <Grid item md={4} sm={12}>
                        <Typography variant={'h3'}
                                    component={'p'}
                                    textAlign={{md: 'center', sm: 'left'}}>
                            Electronics<br/>hardware
                        </Typography>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Typography variant={'h3'}
                                    component={'p'}
                                    textAlign={{md: 'center', sm: 'left'}}>
                            Embedded<br/>firmware
                        </Typography>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Typography variant={'h3'}
                                    component={'p'}
                                    textAlign={{md: 'center', sm: 'left'}}>
                            PC/Mobile<br/>software
                        </Typography>
                    </Grid>
                </Grid>

                <Stack direction={'row'}
                       flexWrap={'wrap'}
                       justifyContent={{md: 'center', sm: 'flex-start'}}
                       rowGap={{lg: '32px', sm: '16px'}}
                       columnGap={{lg: '128px', md: '64px', sm: '16px'}}>
                    {tags.map(t => (
                        <Typography key={t} variant={'body2'}>{t}</Typography>
                    ))}
                </Stack>

                <Stack alignItems={'center'}>
                    <Typography variant={'h3'} textAlign={{md: 'center', sm: 'left'}}>
                        Sentisa cross platform framework
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

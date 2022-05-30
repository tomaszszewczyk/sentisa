import {Grid, Stack, Typography} from "@mui/material";
import {VerticalHeader} from "./VertivalHeader";
import {FC} from "react";
import Image from "next/image";
import bulbIcon from "../../public/img/bulb-icon.svg";

interface CardProps {
    icon: any
    alt: string
    text: string
}

const Card: FC<CardProps> = ({icon, alt, text}) => {
    return (
        <Stack alignItems={'center'} gap={'32px'}>
            <Image src={icon} alt={alt}/>
            <Typography component='p' variant={'h3'}>{text}</Typography>
        </Stack>
    )
}

export const Manufacturing = () => {
    return (
        <Stack direction={'row'} gap={'128px'} alignItems={'center'}>
            <VerticalHeader text={'Manufacturing'}/>

            <Stack gap={'128px'} width={'100%'}>
                <Stack gap={'48px'}>
                    <Typography variant={'h3'}>
                        CE Certification
                    </Typography>

                    <Typography variant={'h3'}>
                        EMC / LVD Compatibility
                    </Typography>

                    <Typography variant={'h3'}>
                        Electronics Manufaturing Service
                    </Typography>

                    <Typography variant={'h3'}>
                        End of line testing
                    </Typography>

                    <Typography variant={'h3'}>
                        Test systems development
                    </Typography>
                </Stack>

                <Grid container alignItems={'center'} justifyContent={'space-between'}>
                    <Grid item>
                        <Stack gap={'32px'}>
                            <Card icon={bulbIcon}
                                  alt={'Żarówka'}
                                  text={'Logistics'}/>
                            <Card icon={bulbIcon}
                                  alt={'Żarówka'}
                                  text={'Electromobility'}/>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Card icon={bulbIcon}
                              alt={'Żarówka'}
                              text={'Your product'}/>
                    </Grid>
                    <Grid item>
                        <Stack gap={'32px'}>
                            <Card icon={bulbIcon}
                                  alt={'Smart city'}
                                  text={'Logistics'}/>
                            <Card icon={bulbIcon}
                                  alt={'Żarówka'}
                                  text={'Industry 4.0'}/>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>



        </Stack>
    )
}
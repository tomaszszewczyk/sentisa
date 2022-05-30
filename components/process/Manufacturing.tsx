import {Box, Grid, Stack, Typography} from "@mui/material";
import {VerticalHeader} from "./VertivalHeader";
import {FC} from "react";
import Image from "next/image";
import bulbIcon from "../../public/img/bulb-icon.svg";
import electromobilityIcon from "../../public/img/electromobility.svg";
import industryIcon from "../../public/img/industry 4.0.svg";
import smartcityIcon from "../../public/img/smartcity.svg";
import logisticIcon from "../../public/img/logistic.svg";

interface CardProps {
    icon: any
    alt: string
    text: string
}

const Card: FC<CardProps> = ({icon, alt, text}) => {
    return (
        <Stack alignItems={"center"} direction={{lg: 'column', md: 'row'}} gap={{md: '32px', sm: '16px'}} flexShrink={0}>
            <Box width={{md: 'unset', sm: '32px'}}>
            <Image src={icon} alt={alt}/>
            </Box>
            <Typography component='p' variant={'h3'}>{text}</Typography>
        </Stack>
    )
}

export const Manufacturing = () => {
    return (
        <Stack direction={'row'} gap={{lg: '128px', md: '64px', sm: '16px'}} alignItems={{lg: 'center', sm: 'flex-start'}}>
            <VerticalHeader text={'Manufacturing'}/>

            <Stack gap={{lg: '128px', md: '64px', sm: '32px'}} width={'100%'}>
                <Stack gap={{lg: '48px', md: '32px', sm: '16px'}}>
                    <Typography variant={'h3'}>
                        CE Certification
                    </Typography>

                    <Typography variant={'h3'}>
                        EMC / LVD Compatibility
                    </Typography>

                    <Typography variant={'h3'}>
                        Electronics Manufacturing Service
                    </Typography>

                    <Typography variant={'h3'}>
                        End of line testing
                    </Typography>

                    <Typography variant={'h3'}>
                        Test systems development
                    </Typography>
                </Stack>

                <Grid container
                      alignItems={{lg: 'center', sm: 'flex-start'}}
                      justifyContent={{lg: 'space-between', sm: 'space-around'}}
                      spacing={'32px'}>
                    <Grid item lg={4} sm={12}>
                        <Stack gap={'32px'}>
                            <Card icon={logisticIcon}
                                  alt={'Roadsigns'}
                                  text={'Logistics'}/>
                            <Card icon={electromobilityIcon}
                                  alt={'Electric car'}
                                  text={'Electromobility'}/>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} sm={12}>
                        <Card icon={bulbIcon}
                              alt={'Bulb'}
                              text={'Your product'}/>
                    </Grid>
                    <Grid item lg={4} sm={12}>
                        <Stack gap={'32px'}>
                            <Card icon={smartcityIcon}
                                  alt={'Smart city'}
                                  text={'Smart city'}/>
                            <Card icon={industryIcon}
                                  alt={'Industry'}
                                  text={'Industry 4.0'}/>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>



        </Stack>
    )
}
import {FC} from "react";
import {Box, Container, Stack, Typography} from "@mui/material";
import Image from "next/image";

import bulbIcon from "../../public/img/bulb-icon.svg";
import brainIcon from "../../public/img/brain-icon.svg";
import toolsIcon from "../../public/img/tools-icon.svg";
import logisticsIcon from "../../public/img/logistic.svg";

interface CardProps {
    icon: any
    alt: string
    text: string
    desc: string
}

const Card: FC<CardProps> = ({icon, alt, text, desc}) => {
    return (
        <Stack direction={{md: 'row', sm: 'column'}} alignItems={'center'} gap={'32px'} maxWidth={'600px'}>
            <Box width={'64px'} flexShrink={0}>
            <Image src={icon} alt={alt} layout={'responsive'}/>
            </Box>
            <Stack gap={'12px'}>
                <Typography component='p' variant={'h3'}>{text}</Typography>
                <Typography>{desc}</Typography>
            </Stack>
        </Stack>
    )
}

export const Join = () => {
    return (
        <Box pt={'128px'}>
            <Container maxWidth={'lg'}>
                <Typography>
                    We offer an unique opportunity for You to gain experience in one of the chosen fields:
                </Typography>

                <Stack p={{md: '64px', sm: '16px'}} gap={'64px'}>
                    <Card icon={bulbIcon}
                          alt={'Bulb icon'}
                          text={'Electronics design'}
                          desc={'Move from project assumptions and ideas to integrated circuits and components that would realize them'}
                    />
                    <Card icon={toolsIcon}
                          alt={'Tool set'}
                          text={'Hardware design'}
                          desc={'Prepare PCB layout that fits project requirements, passes EMC/other certification, is safe and reliable'}
                    />
                    <Card icon={brainIcon}
                          alt={'Brain'}
                          text={'Embedded software'}
                          desc={'Enliven our device by programming the on-board microcontroller'}
                    />
                    <Card icon={logisticsIcon}
                          alt={'Roadsigns'}
                          text={'Testing'}
                          desc={'Prove all the above guys that there’s still something they’ve never thought about'}
                    />
                </Stack>

                <Typography>
                    We’re looking for versatile engineers, who are ready to take challenges and share the passion for electronics with us.
                </Typography>
            </Container>
        </Box>
    )
}
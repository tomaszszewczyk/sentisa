import {Grid, Stack, Typography} from "@mui/material";
import bulbIcon from "../../public/img/bulb-icon.svg";
import brainIcon from "../../public/img/brain-icon.svg";
import toolsIcon from "../../public/img/tools-icon.svg";
import {FC} from "react";
import Image from "next/image";
import {VerticalHeader} from "./VertivalHeader";
import {Box} from "@mui/system";

interface CardProps {
    icon: any
    alt: string
    text: string
}

const Card: FC<CardProps> = ({icon, alt, text}) => {
    return (
        <Stack direction={'row'} alignItems={'center'} gap={'32px'}>
            <Box flexShrink={0} width={{sm: '32px', md: 'unset'}}>
                <Image src={icon} alt={alt}/>
            </Box>
            <Typography component='p' variant={'h3'}>{text}</Typography>
        </Stack>
    )
}

export const Research = () => {
    return (
        <Stack direction={'row'} gap={{lg: '128px', md: '64px', sm: '12px'}} alignItems={'center'}>
            <VerticalHeader text={'research'}/>
            <Grid container spacing={{md: '64px', sm: '32px'}} alignItems={'center'}>
                <Grid item lg={6} sm={12} order={{lg: 1, sm: 2}}>
                    <Stack gap={{md: '64px', sm: '24px'}}>
                        <Card icon={bulbIcon} alt='Bulb' text={'Your product idea'}/>
                        <Card icon={brainIcon} alt='Brain' text={'Design thinking'}/>
                        <Card icon={toolsIcon} alt='Toolset' text={'Solution architecture'}/>
                    </Stack>
                </Grid>
                <Grid item lg={6} sm={12} order={{lg: 2, sm: 1}}>
                    <Typography variant={'h3'} pb={'8px'}>How we work?</Typography>
                    <Typography maxWidth={'300px'}>{
                        'By combining Design Thinking approach to our customers\' problems and Lean Methods ' +
                        'in development we pursue perfection in delivering suitable solutions meeting budget ' +
                        'and time constraints'
                    }</Typography>
                </Grid>
            </Grid>
        </Stack>
    )
}
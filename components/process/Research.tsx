import {Grid, Stack, Typography} from "@mui/material";
import bulbIcon from "../../public/img/bulb-icon.svg";
import brainIcon from "../../public/img/brain-icon.svg";
import toolsIcon from "../../public/img/tools-icon.svg";
import {FC} from "react";
import Image from "next/image";
import {VerticalHeader} from "./VertivalHeader";

interface CardProps {
    icon: any
    alt: string
    text: string
}

const Card: FC<CardProps> = ({icon, alt, text}) => {
    return (
        <Stack direction={'row'} alignItems={'center'} gap={'32px'}>
            <Image src={icon} alt={alt}/>
            <Typography component='p' variant={'h3'}>{text}</Typography>
        </Stack>
    )
}

export const Research = () => {
    return (
        <Stack direction={'row'} gap={'128px'} alignItems={'center'}>
            <VerticalHeader text={'research'}/>
            <Grid container spacing={'64px'} alignItems={'center'}>
                <Grid item md={6}>
                    <Stack gap={'64px'}>
                        <Card icon={bulbIcon} alt='Żarówka reprezentująca pomysł' text={'Your product idea'}/>
                        <Card icon={brainIcon} alt='Mózg reprezentujący pracę umysłową' text={'Design thinking'}/>
                        <Card icon={toolsIcon} alt='Narzędzie reprezentujące pomysł' text={'Solution architecture'}/>
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Typography variant={'h3'} pb={'8px'}>How we work?</Typography>
                    <Typography maxWidth={'300px'}>{
                        'By combining Design Thinking approach to our customers\' problems and Lean Methods' +
                        'in development we pursue perfection in delivering suitable solutions meeting budget ' +
                        'and time constraints'
                    }</Typography>
                </Grid>
            </Grid>
        </Stack>
    )
}
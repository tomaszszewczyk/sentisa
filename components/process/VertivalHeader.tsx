import {FC} from "react";
import {Typography} from "@mui/material";

interface VerticalHeaderProps {
    text: string
}

export const VerticalHeader: FC<VerticalHeaderProps> = ({text}) =>
    <Typography variant={'h2'} sx={{writingMode: 'vertical-lr'}} alignSelf={'flex-start'}>{text}</Typography>


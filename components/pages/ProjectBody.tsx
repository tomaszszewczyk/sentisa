import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {FC, ReactNode} from "react";
import {Container, Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Image from 'next/image'
import {Project} from "../../lib/portfolio";

const img: FC = (props) => {
    return <Stack component='span' sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        pt: '32px',
        pb: '32px'
    }}>
        <Stack component='span' gap={'8px'} sx={{
            width: '75%',
            borderRadius: '2px',
            overflow: 'hidden',
        }}>
            {/*@ts-ignore*/}
            <Image {...props} layout={'responsive'}/>
        </Stack>
    </Stack>
}

const h1: FC<{children: ReactNode}> = ({children}) =>
    <Typography component={'h2'} variant={'h6'}>{children}</Typography>

interface BlogBodyProps {
    project: Project
    source: MDXRemoteSerializeResult
}

export const ProjectBody: FC<BlogBodyProps> = ({project, source}) => {
    return (
        <>
            <Box>
                <Container maxWidth={'xl'}>
                    <Stack pt={'100px'} pb={'64px'} gap={'16px'}>
                        <Typography variant={'h1'}>{project.title}</Typography>
                        <Typography component='p' variant={'body2'}>{project.desc}</Typography>
                    </Stack>
                </Container>
            </Box>
            <Container maxWidth={'lg'}>
                <Stack>
                    {/*@ts-ignore*/}
                    <MDXRemote {...source} components={{img, h1}}/>
                </Stack>
            </Container>
        </>
    )
}

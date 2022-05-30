import {Container, Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Image from 'next/image'
import {useTheme} from "@mui/material/styles";
import {FC, FunctionComponent} from "react";
import {Project} from "../../lib/portfolio";
import {ButtonLink} from "../navigation/ButtonLink";

interface EntryProps {
    project: Project
    headerComponent?: 'h3' | 'h2'
}

const Entry: FC<EntryProps> = ({project, headerComponent}) => {
    const theme = useTheme();

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                alignItems: 'left',
                gap: '16px',
                maxWidth: '491px',
            },
            [theme.breakpoints.up('md')]: {
                gap: '16px',
                alignItems: 'center',
            },
            [theme.breakpoints.up('lg')]: {
                gap: '32px',
            },
            maxWidth: '1100px',
        }}>
            <Stack direction={'row'}
                   alignItems='center'
                   sx={{flex: '1'}}
                   maxWidth={491}
                   maxHeight={323}
                   overflow={'hidden'}>
                <Image src={project.mini}
                       alt={project.desc}
                       width={project.width}
                       height={project.height}/>
            </Stack>

            <Box sx={{
                flex: '1',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                [theme.breakpoints.up('md')]: {
                    m: '24px',
                    gap: '24px',
                },
                [theme.breakpoints.down('md')]: {
                    gap: '24px',
                },
            }}>
                <Typography component={headerComponent ?? 'h3'} variant='h4'>{project.title}</Typography>
                <Typography variant='body1' component='p'>{project.desc}</Typography>
                <ButtonLink variant={'contained'} href={'/portfolio/' + project.short}>Zobacz</ButtonLink>
            </Box>
        </Box>
    )
}

interface ProjectsListProps {
    projects: Project[]
    header?: string
    headerComponent?: 'h3' | 'h2'
}

const ProjectsList: FunctionComponent<ProjectsListProps> = ({projects, header, headerComponent}) => {
    const theme = useTheme();

    return (
        <Box sx={{
            pb: '100px',
            mt: '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            [theme.breakpoints.down('lg')]: {
                gap: '64px',
            },
            [theme.breakpoints.up('lg')]: {
                gap: '84px',
            },
        }}>
            {!!header && (
                <Container maxWidth={'xl'}>
                    <Typography variant={'h2'} pt={'32px'}>
                        {header}
                    </Typography>
                </Container>
            )}
            <Container maxWidth={'lg'}>
                <Stack alignItems={'center'} gap={'72px'} width={'100%'}>
                    {projects.map((p, i) => <Entry key={i} project={p} headerComponent={headerComponent}/>)}
                </Stack>
            </Container>
        </Box>
    )
}

export default ProjectsList

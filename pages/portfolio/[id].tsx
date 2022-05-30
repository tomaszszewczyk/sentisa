import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../../theme/theme";
import {getProject, getProjects, Project} from "../../lib/portfolio";
import {MDXRemoteSerializeResult} from "next-mdx-remote";
import {serialize} from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import {CssBaseline} from "@mui/material";
import {HtmlHead} from "../../components/meta/HtmlHead";
import {SkipLink} from "../../components/navigation/SkipLink";
import {Navbar} from "../../components/navigation/Navbar";
import ProjectsList from "../../components/pages/ProjectList";
import {Footer} from "../../components/pages/Footer";
import {ProjectBody} from "../../components/pages/ProjectBody";

interface ProjectPageProps {
    project: Project
    source: MDXRemoteSerializeResult
    other: Project[]
}

const Project: NextPage<ProjectPageProps> = ({project, other, source}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HtmlHead
                title={'Sentisa - ' + project.title}
                description={project.desc}/>

            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <article>
                    <ProjectBody project={project} source={source}/>
                </article>
                <ProjectsList projects={other} header={"See more"}/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export const getStaticProps: GetStaticProps<ProjectPageProps> = async (context) => {
    const project = await getProject(context.params!.id as string)
    const allPosts = await getProjects()

    return {
        props: {
            project,
            source: await serialize(project.content, {
                mdxOptions: {
                    // @ts-ignore
                    rehypePlugins: [[imageSize, {dir: "public"}]],
                },
            }),
            other: allPosts.filter(p => p.short != project.short).slice(0, 2)
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const projects = await getProjects()

    return {
        paths: projects.map(p => ({params: {id: p.short}})),
        fallback: false,
    }
}

export default Project
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../theme/theme";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {Footer} from "../components/pages/Footer";
import {GetStaticProps, NextPage} from "next";
import {PortfolioHero} from "../components/pages/PortfolioHero";
import ProjectsList from "../components/pages/ProjectList";
import {getProjects, Project} from "../lib/portfolio";
import {HtmlHead} from "../components/meta/HtmlHead";
import {CssBaseline} from "@mui/material";

interface BlogPageProps {
    projects: Project[]
}

const BlogPage: NextPage<BlogPageProps> = ({projects}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

            <HtmlHead
                title={'Sentisa - Portfolio'}
                description={'Projects'}/>

            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <PortfolioHero/>
                <ProjectsList projects={projects} headerComponent={'h2'}/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export default BlogPage

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
    return {props: {projects: await getProjects()}}
}

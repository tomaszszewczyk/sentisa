import fs from "fs";
import {join} from "path";
import matter from "gray-matter";
import imageSize from "image-size";

export interface Project {
    short: string
    title: string
    desc: string
    mini: string
    width: number
    height: number
    content: string
}

const postsDirectory = join(process.cwd(), 'portfolio')
const imagesDirectory = join(process.cwd(), 'public', 'img', 'portfolio')

export const getProject = async (d: string): Promise<Project> => {
    const short = d.split('.')[0]
    const fileContents = fs.readFileSync(join(postsDirectory, short + '.md'), 'utf8')
    const {data, content} = matter(fileContents)

    const imageDir = join(imagesDirectory, short)
    const imageName = fs.readdirSync(imageDir)[0]

    const size = imageSize(join(imageDir, imageName))

    return {
        short,
        title: data['title'],
        desc: data['desc'],
        mini: '/' + join('img', 'portfolio', short, imageName),
        width: size.width ?? 0,
        height: size.height ?? 0,
        content
    }
}

export async function getProjects(): Promise<Project[]> {
    return await Promise.all(fs.readdirSync(postsDirectory).map(d => getProject(d)))
}

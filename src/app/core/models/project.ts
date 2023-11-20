export interface Project {
    name: string;
    description: string;
    technologies: Technology[],
    image: string;
    url: string;
}
export interface Technology{
    name:string;
    badgeUrl:string;
}
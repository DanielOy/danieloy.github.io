export interface Project {
    name: string;
    description: string;
    tecnologies: Tecnology[],
    image: string;
    url: string;
}
export interface Tecnology{
    name:string;
    badgeUrl:string;
}
import { Injectable } from "@angular/core";
import { Project } from "@core/models/project";
import { Qualification } from "@core/models/qualification";
import { Skill } from "@core/models/skill";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HomeService {

    private qualificationsEN: Qualification[] = [
        { title: "Discipline 💪", description: "When I decide to achieve something, I use 100% of myself until I reach it, not giving up in the face of difficulties and being constant has been key in my career." },
        { title: "Autodidact 📚", description: "I am a curious person, I like to occupy my free time to take courses, read books or articles to learn more about new technology trends and best programming practices." },
        { title: "Team Work 👥", description: "Collaborative work allows me to learn from the experience of others and to have different points of view, so I am always open to constructive opinions and to help those who have doubts." }
    ];

    private qualificationsES: Qualification[] = [
        { title: "Disciplina 💪", description: "Cuando me decido a lograr algo uso el 100% de mi hasta alcanzarlo, no rendirse ante las dificultades y ser constante ha sido clave en mi carrera." },
        { title: "Autodidacta 📚", description: "Soy una persona curiosa, me gusta ocupar mi tiempo libre para tomar cursos, leer libros o artículos para aprender más acerca de las nuevas tendencias tecnológicas y las mejoras prácticas de programación." },
        { title: "Trabajo en Equipo 👥", description: "El trabajo colaborativo permite aprender de la experiencia de los demás y tener diferentes puntos de vista es entonces que siempre estoy abierto a opiniones constructivas y ayudar a quien tiene dudas." }
    ];

    private skillsEN: Skill[] = [
        { name: '.NET', description: 'I have developed desktop applications with .NET for the last 3 years, as well as some web applications, web scrappers, windows services, also I created and consumed some own and third parties APIs.', image: '../../assets/images/net-logo.png', experience: 'Strong', experiencePercentage: 75 },
        { name: 'Microsoft Sql Server', description: 'I frequently use SQL Server in my projects, where I apply data definition and manipulation languages to create and manage tables, procedures, triggers, indexes and other elements.', image: '../../assets/images/msserver-logo.png', experience: 'Strong', experiencePercentage: 75 },
        { name: 'Git', description: 'I use GIT since years ago to control the changes of the projects where I work, I have used from basic commands to upload and download changes to more complex commands to rewrite the change log and manage branches.', image: '../../assets/images/git-logo.png', experience: 'Strong', experiencePercentage: 75 },
        { name: 'Angular', description: "I've been using angular for a couple of years and currently in my personal projects to improve my knowledge and adopt best practices for its use and application.", image: '../../assets/images/angular-logo.png', experience: 'Intermediate', experiencePercentage: 75 },
        { name: 'Ionic Framework', description: "Professionally I've a couple of years of experience using ionic 4 in the creation of a hybrid application that is currently available for android and ios.  Nowadays I continue giving maintenance to this application, in addition to continue practicing this framework in my free time.", image: '../../assets/images/ionic-logo.png', experience: 'Intermediate', experiencePercentage: 50 },
        { name: 'Bootstrap 4', description: "I've been using this Framework for a couple of years. I know the main points besides I'm improving by using it in my web projects.", image: '../../assets/images/bootstrap-logo.png', experience: 'Basic', experiencePercentage: 50 },
        { name: 'Docker', description: "I use Docker for my personal projects in order to simplify and speed up certain processes. Making use of commands for the creation and use of containers, volumes, port management that I continue to practice in every personal project I start.", image: '../../assets/images/docker-logo.png', experience: 'Basic', experiencePercentage: 40 }
    ];

    private skillsES: Skill[] = [
        { name: '.NET', description: 'He desarrollado aplicaciones de escritorio con .NET los últimos 3 años, además de algunas aplicaciones web, web scrappers, servicios de windows, así también creado y consumido algunas APIs propias y terceros.', image: '../../assets/images/net-logo.png', experience: 'Alto', experiencePercentage: 80 },
        { name: 'Microsoft Sql Server', description: 'Uso frecuentemente SQL Server en mis proyectos, en donde aplico lenguajes de definición y manipulación de datos para crear y gestionar tablas, procedimientos, disparadores, índices, entre otros elementos.', image: '../../assets/images/msserver-logo.png', experience: 'Alto', experiencePercentage: 80 },
        { name: 'Git', description: 'Uso GIT desde años atrás para controlar los cambios de los proyectos donde trabajo, he usado desde los comandos básicos para subir y descargar cambios hasta más complejos para reescribir la bitácora de cambios y administrar ramas.', image: '../../assets/images/git-logo.png', experience: 'Alto', experiencePercentage: 80 },
        { name: 'Angular', description: "He usado angular desde hace un par de años y actualmente en mis proyectos personales para mejorar mi conocimiento y adoptar las mejores prácticas para su uso y aplicación.", image: '../../assets/images/angular-logo.png', experience: 'Intermedio', experiencePercentage: 70 },
        { name: 'Ionic Framework', description: 'Profesionalmente tengo un par de años experiencia usando ionic 4 en la creación de una aplicación híbrida que actualmente está disponible para android y ios.  Actualmente continúo dándole mantenimiento a dicha aplicación, además de continuar practicando este framework en mis tiempos libres.', image: '../../assets/images/ionic-logo.png', experience: 'Intermedio', experiencePercentage: 60 },
        { name: 'Bootstrap 4', description: "He usado este Framework un par de años. Conozco los principales puntos para su uso lo cual voy mejorando al hacer uso de este en mis proyectos web.", image: '../../assets/images/bootstrap-logo.png', experience: 'Básico', experiencePercentage: 50 },
        { name: 'Docker', description: "Ocupo Docker para mis proyectos personales con el fin de simplificar y acelerar ciertos procesos. Haciendo uso de comandos para la creación y uso de contenedores, volúmenes, gestión de puertos que continúo practicando en cada proyecto que inicio.", image: '../../assets/images/docker-logo.png', experience: 'Básico', experiencePercentage: 40 }
    ];

    private projectsEN: Project[] = [
        {
            name: 'Fashion Like', description: 'Collaborative project for the creation of a social network. In this project I take the role of backend developer and using .NET Core I build an API for managing users, posts and reactions. With this project I practiced how to build an API using EF Core, the repository and specification patterns, error handling, authentication and authorization processes.',
            image: '../../assets/images/fashionlike-project.png', url: "https://github.com/DanielOy/FashionLike",
            technologies: [
                { name: '.NET Core', badgeUrl: 'https://img.shields.io/badge/.NET-5C2D91?style=plastic&logo=.net&logoColor=white' },
                { name: 'SQLite', badgeUrl: 'https://img.shields.io/badge/SQLite-07405E?style=plastic&logo=sqlite&logoColor=white' },
                { name: 'Git', badgeUrl: 'https://img.shields.io/badge/Git%20-%23F05033.svg?style=plastic&logo=git&logoColor=white' },
                { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/-Docker-black?style=plastic&logo=docker' }
            ]
        },
        {
            name: 'Skinet', description: 'E-commerce application built with Angular and .NET Core. As part of a Udemy course, I created this application where I learned to use the repository and specifications patterns, use Entity Framework Core, stripe for online payments, design patterns, error handling and other things.',
            image: '../../assets/images/skinet-project.png',
            url: "https://ski-net.azurewebsites.net",
            technologies: [
                { name: 'Angular', badgeUrl: 'https://img.shields.io/badge/Angular-DD0031?style=plastic&logo=angular&logoColor=white' },
                { name: '.NET Core', badgeUrl: 'https://img.shields.io/badge/.NET-5C2D91?style=plastic&logo=.net&logoColor=white' },
                { name: 'SQLite', badgeUrl: 'https://img.shields.io/badge/SQLite-07405E?style=plastic&logo=sqlite&logoColor=white' },
                { name: 'Git', badgeUrl: 'https://img.shields.io/badge/Git%20-%23F05033.svg?style=plastic&logo=git&logoColor=white' },
                { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/-Docker-black?style=plastic&logo=docker' }
            ]
        }
    ];

    private projectsES: Project[] = [
        {
            name: 'Fashion Like', description: 'Proyecto colaborativo para la creación de una red social. En este tomo el rol de desarrollador backend y haciendo uso .NET Core construyo una API para el manejo de usuarios, posts y reacciones. Con este proyecto practique como construir una API usando EF Core, el patrón de repositorios y especificación, el manejo de errores, procesos de autenticación y autorización.',
            image: '../../assets/images/fashionlike-project.png', url: "https://github.com/DanielOy/FashionLike",
            technologies: [
                { name: '.NET Core', badgeUrl: 'https://img.shields.io/badge/.NET-5C2D91?style=plastic&logo=.net&logoColor=white' },
                { name: 'SQLite', badgeUrl: 'https://img.shields.io/badge/SQLite-07405E?style=plastic&logo=sqlite&logoColor=white' },
                { name: 'Git', badgeUrl: 'https://img.shields.io/badge/Git%20-%23F05033.svg?style=plastic&logo=git&logoColor=white' },
                { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/-Docker-black?style=plastic&logo=docker' }
            ]
        },
        {
            name: 'Skinet', description: 'Aplicación de comercio electrónico construida con Angular y .NET Core. Como parte un curso de Udemy, Cree esta aplicación donde aprendí a usar el patrón de repositorios y especificaciones, usar Entity Framework Core, stripe para pagos en línea, patrones de diseño, manejo de errores, entre otras cosas.',
            image: '../../assets/images/skinet-project.png', 
            url: "https://ski-net.azurewebsites.net",
            technologies: [
                { name: 'Angular', badgeUrl: 'https://img.shields.io/badge/Angular-DD0031?style=plastic&logo=angular&logoColor=white' },
                { name: '.NET Core', badgeUrl: 'https://img.shields.io/badge/.NET-5C2D91?style=plastic&logo=.net&logoColor=white' },
                { name: 'SQLite', badgeUrl: 'https://img.shields.io/badge/SQLite-07405E?style=plastic&logo=sqlite&logoColor=white' },
                { name: 'Git', badgeUrl: 'https://img.shields.io/badge/Git%20-%23F05033.svg?style=plastic&logo=git&logoColor=white' },
                { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/-Docker-black?style=plastic&logo=docker' }
            ]
        }
    ];

    qualifications: BehaviorSubject<Qualification[]> = new BehaviorSubject(this.qualificationsEN);
    skills: BehaviorSubject<Skill[]> = new BehaviorSubject(this.skillsEN);
    projects: BehaviorSubject<Project[]> = new BehaviorSubject(this.projectsEN);

    constructor(translateSrv: TranslateService) {
        this.languageChanged(translateSrv.defaultLang)
        translateSrv.onLangChange.asObservable().subscribe((evt) => {
            this.languageChanged(evt.lang)
        })
    }

    languageChanged(language: string) {
        if (language == 'en') {
            this.qualifications.next(this.qualificationsEN);
            this.skills.next(this.skillsEN);
            this.projects.next(this.projectsEN);
        } else {
            this.qualifications.next(this.qualificationsES);
            this.skills.next(this.skillsES);
            this.projects.next(this.projectsES);
        }
    }
}
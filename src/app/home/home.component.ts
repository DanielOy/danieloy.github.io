import { Component, OnInit } from '@angular/core';
import { Project } from '@core/models/project';
import { Qualification } from '@core/models/qualification';
import { Skill } from '@core/models/skill';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeSlideIndex: number = 0;
  qualifications: Qualification[] = [
    { title: "Discipline 💪", description: "When I decide to achieve something, I use 100% of my energy. Being constant and disciplined has been the focus of my success in my professional career." },
    { title: "Autodidact 📚", description: "I'm curious. Because of that, I often take courses, watch videos or read books to learn more about the new technologies and the best practices of programming." },
    { title: "Team Work 👥", description: "I think it is key to developing valuable products, besides that helps to learn more from the experience of others and get different points of view." }];

  skills: Skill[] = [
    { name: '.NET', description: 'I have developed desktop for the last three years, also built some web applications, web services, web scrappers, consumed apis, built some systems, fixed and maintained several more.', image: '../../assets/images/net-logo.png', experience: '+3 years', experiencePorcentage: 75 },
    { name: 'Microsoft Sql Server', description: 'In almost all the projects, I used SQL Server where I applied the DDL and DML to create and manipulate tables, procedures, triggers and other activities with relational databases.', image: '../../assets/images/msserver-logo.png', experience: '+3 years', experiencePorcentage: 75 },
    { name: 'Git', description: 'I used git to control the changes of the projects I worked on, from basic commands like upload and download changes to more complexities like rewrite the log, manage branches and track changes.', image: '../../assets/images/git-logo.png', experience: '+3 years', experiencePorcentage: 75 },
    { name: 'Angular', description: "I've had the opportunity to work with Angular on a mobile application project since that. I like the framework. So, I've practiced on my own with some personal projects to improve my knowledge of it and adopt the best practices.", image: '../../assets/images/angular-logo.png', experience: '+2 years', experiencePorcentage: 75 },
    { name: 'Ionic Framework', description: 'Ionic helped me to build a hybrid application that is now available for android and ios. Even when I am not using ionic in my ordinary projects, I still use it when I want to build a mobile application in my free time.', image: '../../assets/images/ionic-logo.png', experience: '+2 years', experiencePorcentage: 50 },
    { name: 'Bootstrap 4', description: "In some projects I've used this framework. Even though I am not so confident about knowing all the aspects of bootstrap, I really know the main points for using it.", image: '../../assets/images/bootstrap-logo.png', experience: '+1 years', experiencePorcentage: 50 },
    { name: 'Docker', description: "I took a course about docker in which I discovered a lot of facilities that Docker gives me when I develop web projects. So, now I try to use it in my personal projects for practicing and improve my management of that technology.", image: '../../assets/images/docker-logo.png', experience: '<1 years', experiencePorcentage: 40 }
  ]

  projects: Project[] = [
    {
      name: 'Fashion Like',
      description: 'Collaborative project for a social media web application. In this project I took the role of backed developer, so I used .NET core to build an api to manage users, posts and reactions. With this project I practiced how to build an API using EF, repository pattern, error handling, authentication and authorization.',
      image: '../../assets/images/fashionlike-project.png',
      url: "https://github.com/DanielOy/FashionLike",
      tecnologies: [
        { name: '.NET Core', badgeUrl: 'https://img.shields.io/badge/.NET-5C2D91?style=plastic&logo=.net&logoColor=white' },
        { name: 'SQLite', badgeUrl: 'https://img.shields.io/badge/SQLite-07405E?style=plastic&logo=sqlite&logoColor=white' },
        { name: 'Git', badgeUrl: 'https://img.shields.io/badge/Git%20-%23F05033.svg?style=plastic&logo=git&logoColor=white' },
        { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/-Docker-black?style=plastic&logo=docker' }
      ]
    },
    {
      name: 'Skinet',
      description: 'E-Commerse shopping application built with Angular and .NET Core. As part of an Udemy course, I created this application where I learn to use the repository and specification pattern, use EF Core and many other technologies and tools.',
      image: '../../assets/images/skinet-project.png',
      url: "https://github.com/DanielOy/Skinet",
      tecnologies: [
        { name: 'Angular', badgeUrl: 'https://img.shields.io/badge/Angular-DD0031?style=plastic&logo=angular&logoColor=white' },
        { name: '.NET Core', badgeUrl: 'https://img.shields.io/badge/.NET-5C2D91?style=plastic&logo=.net&logoColor=white' },
        { name: 'SQLite', badgeUrl: 'https://img.shields.io/badge/SQLite-07405E?style=plastic&logo=sqlite&logoColor=white' },
        { name: 'Git', badgeUrl: 'https://img.shields.io/badge/Git%20-%23F05033.svg?style=plastic&logo=git&logoColor=white' },
        { name: 'Docker', badgeUrl: 'https://img.shields.io/badge/-Docker-black?style=plastic&logo=docker' }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

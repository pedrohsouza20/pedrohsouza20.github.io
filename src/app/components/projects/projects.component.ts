import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public static projects: [];

  projects = [
    {
      title: 'Social Articles',
      description: 'An website where people can post some article/question and others can like and comment about it',
      technologies: [
        'Angular', 'Express', 'Sequelize', 'TypeScript', 'MySQL'
      ],
      status: 'doing',
      imagePathName: 'blog-with-cms.png',
      githubRepositoryLink: 'https://github.com/pedrohsouza20/social-articles'
    },
    {
      title: 'Blog with CMS',
      description: 'A blog for posting articles, with a CMS - Content Management System where the admin can create new articles and new categories',
      technologies: [
        'HTML', 'Express', 'Sequelize', 'EJS', 'MySQL'
      ],
      status: 'doing',
      imagePathName: 'blog-with-cms.png',
      githubRepositoryLink: 'https://github.com/pedrohsouza20/Blog'
    },
    {
      title: 'Ask and Answers',
      description: 'An website like Yahoo Answers, with questions and answers.',
      technologies: [
        'HTML', 'Express', 'Sequelize', 'EJS', 'MySQL'
      ],
      status: 'doing',
      imagePathName: 'blog-with-cms.png',
      githubRepositoryLink: 'https://github.com/pedrohsouza20/Ask-Answers'
    },

  ];

  ngOnInit(): void {
  }

}

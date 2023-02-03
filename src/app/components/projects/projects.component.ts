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
    { title: 'teste' },
    { title: 'teste' }
  ];

  ngOnInit(): void {
  }

}

/// <reference path="../enums/ProjectStatus.ts" />

namespace App {
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) { }
  }
}

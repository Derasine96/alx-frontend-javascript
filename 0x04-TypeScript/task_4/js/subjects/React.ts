/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class ReactClass extends Subject {
    getRequirements() {
      return "Here is the list of requirements for React";
    }
    getAvailableTeacher() {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher}`;
      }
      return "No available teacher";
    }
  }
}

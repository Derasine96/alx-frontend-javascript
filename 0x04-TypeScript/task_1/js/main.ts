interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}


interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName[0];
  return `${firstLetter}. ${lastName}`;
}

interface IStudentClass {
  firstName: string;
  lastName: string;
}

class StudentClass implements IStudentClass {
  firstName: string;
  lastName: string;

  constructor(fN: string, lN: string) {
    this.firstName = fN
    this.lastName = lN
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return `${this.firstName}`;
  }
}

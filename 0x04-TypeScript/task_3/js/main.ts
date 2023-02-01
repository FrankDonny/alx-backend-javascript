// interface Teacher {
//     readonly firstName: string;
//     readonly lastName: string;
//     fullTimeEmployee: boolean;
//     yearsOfExperience?: number;
//     location: string;
//     [key: string]: any;
// }

// interface Director extends Teacher {
//     numberOfReports: string;
// }

// interface DirectorInterface {
//     workFromHome(): string;
//     getCoffeeBreak(): string;
//     workDirectorTasks(): string;
// }

// interface TeacherInterface {
//     workFromHome(): string;
//     getCoffeeBreak(): string;
//     workTeacherTasks(): string;
// }

// class Director implements DirectorInterface {
//     workDirectorTasks() {
//         return 'Getting to director tasks';
//     }

//     workFromHome() {
//         return 'Working from home';
//     }

//     getCoffeeBreak() {
//         return 'Getting a coffee break';
//     }
// }

// class Teacher implements TeacherInterface {
//     workFromHome() {
//         return 'Cannot work from home';
//     }

//     getCoffeeBreak() {
//         return 'Cannot have a break';
//     }

//     workTeacherTasks() {
//         return 'Getting to work';
//     }
// }

// function createEmployee(salary: number | string) {
//     if (typeof salary === "number" && salary < 500) {
//         return Teacher;
//     }
//     return Director;
// }

// function isDirector(employee: Teacher): employee is Director {
//     return (employee as Director).numberOfReports !== undefined;
// }

// function executeWork(employee: Teacher | Director) {
//     if (employee.numberOfReports) {
//         employee.workDirectorTasks();
//     } else {
//         employee.workTeacherTasks();
//     }
// }

// type Subjects = 'Math' | 'History';

// function teachClass(todayClass: Subjects): string {
//     if (todayClass === 'Math') {
//         return 'Teaching Math';
//     } else if (todayClass === 'History') {
//         return 'Teaching History';
//     }
// }
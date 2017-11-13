import { Student } from "./student";

export class Subject {

  constructor(
    public id: string,
    public name: string,
    public studies: string,
    public semester: string,
    public students: Array<Student>
  ) {  }

}

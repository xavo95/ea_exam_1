import {Component} from '@angular/core';
import {Subject} from './subject';
import {Student} from './student';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html'
})

export class SubjectFormComponent {
  constructor(private http: HttpClient) {
  }

  status_res: any;
  subjects: Subject[];
  students: Student[];
  model = new Subject('', '', '', '', []);

  available_subjects: Subject[];
  available_students: Student[];
  selected_subject: Subject;
  selected_student: Student;

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  findSubject() {
    this.http.get('/api/subject').subscribe(data => {
      Object.assign(this.subjects, data);
      this.status_res = '';
    }, err => {
      this.status_res = JSON.parse(err['error'])['message'];
      this.subjects = [];
    });
  }

  findSubjectSorted() {
    this.http.get('/api/subject/sorted/get').subscribe(data => {
      Object.assign(this.subjects, data);
      this.status_res = '';
    }, err => {
      this.status_res = JSON.parse(err['error'])['message'];
      this.subjects = [];
    });
  }

  findSubjectByName() {
    this.http.get('/api/subject/' + this.model.name).subscribe(data => {
      Object.assign(this.subjects, data);
      this.status_res = '';
    }, err => {
      this.status_res = JSON.parse(err['error'])['message'];
      this.subjects = [];
    });
  }

  findSubjectStudies() {
    this.http.get('/api/subject/studies/' + this.model.name).subscribe(data => {
      Object.assign(this.subjects, data);
      this.status_res = '';
    }, err => {
      this.status_res = JSON.parse(err['error'])['message'];
      this.subjects = [];
    });
  }

  findSubjectBySemester() {
    this.http.get('/api/subject/semester/' + this.model.name).subscribe(data => {
      Object.assign(this.subjects, data);
      this.status_res = '';
    }, err => {
      this.status_res = JSON.parse(err['error'])['message'];
      this.subjects = [];
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get('/api/subject').subscribe(data => {
      Object.assign(this.available_subjects, data);
    });
    this.http.get('/api/student').subscribe(data => {
      Object.assign(this.available_students, data);
    });
  }

  addStudent() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.put('/api/subject/adduser', {
      "subject_name": this.selected_subject,
      "student_name": this.selected_student
    }).subscribe(data => {
      this.status_res = data['message'];
    });
  }

  clicked(item: any) {
    this.students = item.students;
  }
}

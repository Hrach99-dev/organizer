import { Component, OnInit } from '@angular/core';
import {DateService} from "../shared/date.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as moment from "moment";

interface TaskTitle {
    [key: string]: unknown
}

interface TaskRequest {
  title: TaskTitle
  date: moment.Moment
}

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  form!: FormGroup

  public taskList: Array<TaskRequest> = []
  constructor(public dateService: DateService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }

  submit(data: TaskRequest): void {
    const title: TaskTitle = data.title['title'] as TaskTitle;
    this.taskList.push({title, date: data.date})
  }

}

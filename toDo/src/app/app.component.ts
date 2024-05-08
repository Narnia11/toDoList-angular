import { Component, Input, OnInit } from '@angular/core';
import { Objects } from './list.model';
import { HttpClient } from '@angular/common/http'
/* import { OBJECTS } from './mock.tasks'; */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo';
  @Input() object!: Objects
  firstObjectArray!: Objects[]
  objectsArray!: Objects[]

  constructor(private http: HttpClient) { }

  fetchObjects() {
    this.http.get<Objects[]>("./assets/toDo.json")
      .subscribe((res: Objects[]) => {
        this.firstObjectArray = res
        this.objectsArray = this.firstObjectArray.filter(n => n.completed === false && n.userId === 1)
      })
  }

  ngOnInit() {
    this.fetchObjects()
  }

  addTask(newTask: string) {
    this.objectsArray.push({
      userId: 1,
      id: this.firstObjectArray.length + 1,
      title: newTask,
      completed: false
    })
    console.log(this.objectsArray)

  }
}

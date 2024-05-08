import { Component, Input } from '@angular/core';
import { Objects } from '../../list.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() object!: Objects
  @Input() objectsArray!: Objects[]
  /*  index!: number */
  statusClass = "uncompleted"

  //The function bellow is to delete checked title from array so it disappears from the page. I didn't use it because I didn't want it to disappear

  /* deletFromArray(id: number) {

    this.object.completed = true
    this.index=this.objectsArray.findIndex(n=> n.id===id)
    if(this.index>-1){
      this.objectsArray.splice(this.index, 1)

    }
    console.log(this.objectsArray)
   
  } */
  completedTask() {
    this.object.completed = true
    this.statusClass = "completed"
    console.log(this.object)
    /* console.log(this.objectsArray) */
  }


}

import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private dialog: MatDialog) {}
 
  openDialog() {
    
    const dialogConfig = new MatDialogConfig();
 
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
 
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
    
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
 
    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
  }
}
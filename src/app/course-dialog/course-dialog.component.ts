import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
 
@Component({
  selector: 'course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {
  form: FormGroup;
  description:string;
 
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {description} 
  ) {
 
    this.description = description; 
    this.form = fb.group({
      description: [description, []]
    });
  }
 
  ngOnInit(): void {
    
  }
 
  save() {
    this.dialogRef.close(this.form.value);
  }
 
  close() {
      this.dialogRef.close(this.form.value);
  }
 
}
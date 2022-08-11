import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroResponse } from '../../pages/interfaces/heroResponse';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [],
})
export class DialogComponent implements OnInit {
  constructor(
    private __ref: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HeroResponse
  ) {}

  ngOnInit(): void {}

  close() {
    this.__ref.close();
  }

  delete() {
    this.__ref.close(true);
  }
}

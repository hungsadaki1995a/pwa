import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAlbumDialogComponent } from 'src/app/dialog/new-album-dialog/new-album-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [NewAlbumDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,

  ],
  exports: [NewAlbumDialogComponent]
})
export class DialogModule { }

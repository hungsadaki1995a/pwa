import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumModule } from 'src/app/album/album.module';

const routes: Routes = [
  {path: '', redirectTo: 'album', pathMatch: 'full'},
  {
    path: 'album',
    loadChildren: () => import('./album/album.module').then(m => AlbumModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

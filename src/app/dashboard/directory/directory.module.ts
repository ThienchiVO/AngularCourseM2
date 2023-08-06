import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory.component';
import { MatIconModule } from '@angular/material/icon';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DirectoryComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    DirectoryRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class DirectoryModule {}

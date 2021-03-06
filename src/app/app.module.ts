import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitDetailsComponent } from './habit-details/habit-details.component';
import { HabitListItemComponent } from './habit-list-item/habit-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HabitFormComponent } from './habit-form/habit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitDetailsComponent,
    HabitListItemComponent,
    HabitFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

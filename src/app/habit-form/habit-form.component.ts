import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.css'],
})
export class HabitFormComponent implements OnInit {
  @Output()
  addHabit = new EventEmitter<string>();

  habitForm;

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    });
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    const { title } = this.habitForm.value;

    this.addHabit.emit(title);
    this.habitForm.reset();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Habit } from '../typings';

@Component({
  selector: 'app-habit-list-item',
  templateUrl: './habit-list-item.component.html',
  styleUrls: ['./habit-list-item.component.css'],
})
export class HabitListItemComponent implements OnInit {
  @Input()
  habit!: Habit;

  constructor() {}

  ngOnInit(): void {}
}

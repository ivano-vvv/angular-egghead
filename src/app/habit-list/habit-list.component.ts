import { Component, OnInit } from '@angular/core';
import { Habit } from '../typings';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css'],
})
export class HabitListComponent implements OnInit {
  habits: Habit[] = [
    {
      id: 1,
      title: 'exercises',
    },
    {
      id: 2,
      title: 'taking a shower',
    },
    {
      id: 3,
      title: '30 minutes of reading',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addHabit(title: string): void {
    this.habits.push({
      id: Math.random() * 1000,
      title,
    });
  }
}

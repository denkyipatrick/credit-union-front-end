import { Component, OnInit } from '@angular/core';

const OPEN_TIME = '10.00';
const CLOSE_TIME = '16.00';

enum Day {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
}

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.scss'],
})
export class WorkingHoursComponent implements OnInit {
  workingHours: { day: Day; openTime: string; closeTime: string }[] = [
    { day: Day.MONDAY, openTime: OPEN_TIME, closeTime: CLOSE_TIME },
    { day: Day.TUESDAY, openTime: OPEN_TIME, closeTime: CLOSE_TIME },
    { day: Day.WEDNESDAY, openTime: OPEN_TIME, closeTime: CLOSE_TIME },
    { day: Day.THURSDAY, openTime: OPEN_TIME, closeTime: '17.00' },
    { day: Day.FRIDAY, openTime: OPEN_TIME, closeTime: CLOSE_TIME },
  ];

  constructor() {}

  ngOnInit(): void {}
}

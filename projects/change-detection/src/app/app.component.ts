import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'change-detection';

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.title = "Vertiv";
    }, 3000);
  }

  ngOnInit(): void {

  }

}

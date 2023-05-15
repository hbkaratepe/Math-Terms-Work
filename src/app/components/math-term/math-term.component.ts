import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathTerm } from 'src/app/model/math-term.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-math-term',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
    <section class="listing">
      <!-- <img class="listing-photo" style="width: 400px; height: auto;" [src]="mathTerm.photo" alt="Exterior photo of {{mathTerm.name}}"> -->
      <h2 class="listing-heading">{{ mathTerm.name | titlecase }}</h2>
      <p class="listing-location">{{ mathTerm.description.slice(0,40) + '...'}} </p>
      <a [routerLink]="['/details', mathTerm.id]">Daha Fazlası...</a>
    </section>
  `,
  styleUrls: ['./math-term.component.css']
})
export class MathTermComponent {
  @Input() mathTerm!: MathTerm;

}

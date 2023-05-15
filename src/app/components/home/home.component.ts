import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathTermComponent } from 'src/app/components/math-term/math-term.component';
import { MathTerm } from 'src/app/model/math-term.model';
import { MathTermService } from 'src/app/service/math-term.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MathTermComponent],
  template: `
    <section>
      <div class="container">
        <form>
          <input type="text" class="search-field" placeholder="Terimler içinde ara" #filter />
          <button
            class="primary"
            type="button"
            (click)="filterResults(filter.value)"
          >
            Search
          </button>
          <br/>
          <button class="secondary" type="button" (click)="filterResults('A')">A</button>
          <button class="secondary" type="button" (click)="filterResults('B')">B</button>
          <button class="secondary" type="button" (click)="filterResults('Ç')">Ç</button>
          <button class="secondary" type="button" (click)="filterResults('D')">D</button>
          <button class="secondary" type="button" (click)="filterResults('E')">E</button>
          <button class="secondary" type="button" (click)="filterResults('H')">H</button>
          <button class="secondary" type="button" (click)="filterResults('O')">O</button>
          <button class="secondary" type="button" (click)="filterResults('Ö')">Ö</button>
          <button class="secondary" type="button" (click)="filterResults('P')">P</button>
          <br/>
          <button class="secondary" type="button" (click)="filterResults('S')">S</button>
          <button class="secondary" type="button" (click)="filterResults('Ş')">Ş</button>
          <button class="secondary" type="button" (click)="filterResults('T')">T</button>
          <button class="secondary" type="button" (click)="filterResults('U')">U</button>
          <button class="secondary" type="button" (click)="filterResults('Ü')">Ü</button>
          <button class="secondary" type="button" (click)="filterResults('V')">V</button>
          <button class="secondary" type="button" (click)="filterResults('Y')">Y</button>
          <button class="secondary" type="button" (click)="filterResults('Z')">Z</button>
        </form>
      </div>
    </section>
    <section class="results">
      <app-math-term
        *ngFor="let mathTerm of filteredMathTermList"
        [mathTerm]="mathTerm"
      ></app-math-term>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  mathTermList: MathTerm[] = [];
  filteredMathTermList: MathTerm[] = [];

  constructor(private mathTermService: MathTermService) {
    this.mathTermList = this.mathTermService.getAllMathTerms();
    this.filteredMathTermList = this.mathTermList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredMathTermList = this.mathTermList;
    }

    this.filteredMathTermList = this.mathTermList.filter(
      mathTerm => mathTerm?.name.toLowerCase().startsWith(text.toLowerCase())
    );
  }
}

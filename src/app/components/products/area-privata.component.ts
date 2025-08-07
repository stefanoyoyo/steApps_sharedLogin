import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area-privata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-privata.component.html',
  styleUrls: ['./area-privata.component.scss']
})
export class AreaPrivataComponent {}
// This component represents a private area accessible only after login.
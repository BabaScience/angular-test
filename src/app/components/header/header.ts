import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  protected appName = signal('Test App');
}

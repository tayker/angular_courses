import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	subscribeFocused: boolean = false;
	onFocused(){
		this.subscribeFocused = true;
	}
}

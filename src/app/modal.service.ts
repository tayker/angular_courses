import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() {}
	currentModal: string;
	openModal(e){
		this.currentModal = e;
	}

}

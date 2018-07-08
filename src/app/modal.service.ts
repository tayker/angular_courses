import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

	constructor() {}
	
	currentModalData: Object;

	currentModal: string;
	openModal(e, data?){
		this.currentModalData = data;
		this.currentModal = e;
	}

}

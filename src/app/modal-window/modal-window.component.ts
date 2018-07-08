import { Component, OnInit } from '@angular/core';

import { ModalService } from '../modal.service';
@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  currentModal() : string{
	  return this.modalService.currentModal;
  }
  hideModal(){
	  this.modalService.currentModal = '';
  }
  ngOnInit() {
	  
  }

}

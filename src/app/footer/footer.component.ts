import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openModal(e){
	  this.modalService.openModal(e);
  }
}

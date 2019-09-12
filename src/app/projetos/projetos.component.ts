import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projeto: any;
  projetos: any[] = [
    // tslint:disable-next-line: max-line-length
    { imagem: '../../assets/img/hands-with-pencil-and-ruler.jpg', nome: 'Web', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis molestias.' },
    // tslint:disable-next-line: max-line-length
    { imagem: '../../assets/img/man-text-messaging-on-wooden-table.jpg', nome: 'Design', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis molestias.' },
    // tslint:disable-next-line: max-line-length
    { imagem: '../../assets/img/woman-checking-smart-watch.jpg', nome: 'Mobile', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis molestias.' },
    // tslint:disable-next-line: max-line-length
    { imagem: '../../assets/img/hands-with-pencil-and-ruler.jpg', nome: 'Web', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis molestias.' },
    // tslint:disable-next-line: max-line-length
    { imagem: '../../assets/img/man-text-messaging-on-wooden-table.jpg', nome: 'Design', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis molestias.' },
    // tslint:disable-next-line: max-line-length
    { imagem: '../../assets/img/woman-checking-smart-watch.jpg', nome: 'Mobile', descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis molestias.' }
  ];

  constructor(private modalService: NgbModal) { }

  detalhe(projeto: any, modal: any) {
    this.projeto = projeto;
    this.modalService.open(modal);
  }

  ngOnInit() {
  }

}

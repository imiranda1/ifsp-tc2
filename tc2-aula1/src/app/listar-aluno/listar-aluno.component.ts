import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {

  aluno : Aluno = {
    nome: "Icaro Miranda",
    dataIngresso: "01/2019",
    previsaoFormatura: "12/2021"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

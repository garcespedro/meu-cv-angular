import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { SobreMimComponent } from './sobre-mim/sobre-mim';
import { SkillsComponent } from './skills/skills';
import { FormacaoComponent } from './formacao/formacao';
import { ExperienciasComponent } from './experiencias/experiencias';
import { ProjetosComponent } from './projetos/projetos';
import { CertificadosComponent } from './certificados/certificados';
import { ContactosComponent } from './contactos/contactos';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,SobreMimComponent,SkillsComponent,FormacaoComponent,ExperienciasComponent,ProjetosComponent,CertificadosComponent,ContactosComponent,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}


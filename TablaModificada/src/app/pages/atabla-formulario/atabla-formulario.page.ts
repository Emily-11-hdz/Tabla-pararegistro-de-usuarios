import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-atabla-formulario',
  templateUrl: './atabla-formulario.page.html',
  styleUrls: ['./atabla-formulario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AtablaFormularioPage implements OnInit {

  listaPersonas: any[] = [];
  
  editando: boolean = false;
  idActual: string = '';
  nuevaPersona = { nombre: '', apellido: '', edad: null };

  constructor(private db: DatabaseService) {}

  ngOnInit() { this.obtenerDatos(); }

  obtenerDatos() {
    this.db.getPersonas().subscribe((res: any) => { this.listaPersonas = res; });
  }

  guardarPersona() {
    if (this.editando) {
      this.db.updatePersona(this.idActual, this.nuevaPersona).subscribe(() => {
        this.obtenerDatos();
        this.limpiarFormulario();
      });
    } else {
      this.db.addPersona(this.nuevaPersona).subscribe(() => {
        this.obtenerDatos();
        this.limpiarFormulario();
      });
    }
  }

  prepararEdicion(persona: any) {
    this.nuevaPersona = { ...persona };
    this.idActual = persona._id;
    this.editando = true;
  }

  borrarPersona(id: string) {
    this.db.deletePersona(id).subscribe(() => this.obtenerDatos());
  }

  limpiarFormulario() {
    this.nuevaPersona = { nombre: '', apellido: '', edad: null };
    this.editando = false;
  }
}
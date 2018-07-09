import { Component, OnInit, Input } from '@angular/core';
import { ColocationService } from '../../../../_lib/colocation.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource, DateAdapter } from '@angular/material';
import { Contacto } from '../../../../_models/Contacto.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input()
  tipo_origen: string;

  @Input()
  id_origen: number;

  contactos: Contacto[];

  dataSource = new MatTableDataSource<Contacto>();
  displayedColumns = ['nombre', 'telefono', 'celular', 'email', 'editar'];

  constructor(_auxiliar: ColocationService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  cargarContactos() {}

  nuevo() {}

  crearContacto() {}

  editarContacto(id: number) {}

}

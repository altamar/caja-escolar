import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApInMemoryProvider } from 'src/app/core/storage/ap-in-memory/ap-in-memory';
import { InMemoryKeys } from 'src/app/core/storage/in-memory-key';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent implements OnInit {
  constructor(private router: Router, private apInMemoryProvider:ApInMemoryProvider) {  }

  ngOnInit(): void {
  }

  continue(){
    this.apInMemoryProvider.clearItem(InMemoryKeys.DatosPersonales);
    this.apInMemoryProvider.clearItem(InMemoryKeys.InformacionFinanciera);
    this.apInMemoryProvider.clearItem(InMemoryKeys.Idsolicitud);
    let rutEncrp = this.apInMemoryProvider.getItemByKey(InMemoryKeys.RUT_Encriptado);
    this.router.navigate(['solicitud/inicio'], {queryParams: {crut:rutEncrp}});
  }

}

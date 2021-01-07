import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApInMemoryProvider } from 'src/app/core/storage/ap-in-memory/ap-in-memory';
import { InMemoryKeys } from 'src/app/core/storage/in-memory-key';

@Component({
  selector: 'app-volver',
  templateUrl: './volver.component.html',
  styleUrls: ['./volver.component.css']
})
export class VolverComponent implements OnInit {

  constructor(private router: Router, private apInMemoryProvider:ApInMemoryProvider) { }

  ngOnInit(): void {
  }


  continue(){
    let rutEncrp = this.apInMemoryProvider.getItemByKey(InMemoryKeys.RUT_Encriptado);
    this.router.navigate(['solicitud/inicio'], {queryParams: {crut:rutEncrp}});
  }



}

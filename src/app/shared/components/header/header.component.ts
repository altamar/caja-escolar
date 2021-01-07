import { Component, OnInit } from '@angular/core';
import {ApInMemoryProvider} from '../../../core/storage/ap-in-memory/ap-in-memory';
import {InMemoryKeys} from '../../../core/storage/in-memory-key';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  rutUser : string;
  constructor(
    private apInMemoryProvider: ApInMemoryProvider) {
    this.rutUser = apInMemoryProvider.getItemByKey(InMemoryKeys.RUT)
  }

  ngOnInit(): void {
  }

}

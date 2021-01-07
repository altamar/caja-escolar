import { Injectable } from '@angular/core';
import {OptionsModal} from '../../models/modal.options';


@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: any[] = [];

    add(modal: any) {
        this.modals.push(modal);
    }

    remove(id: string) {
        this.modals = this.modals.filter(x => x.id !== id);
    }

    open(id: string , options: any ) {
        let modal: any = this.modals.filter(x => x.id === id)[0];
        modal.open(options);
    }

    close(id: string) {
        let modal: any = this.modals.filter(x => x.id === id)[0];
        modal.close();
    }
}
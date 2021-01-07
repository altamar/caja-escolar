export const TypeModal  = {
    error :"error",
    question :'question',
    success :'success',
    info: 'info',
    warning: 'warning',
    load:'load'
  } 

  export class OptionsModal{
     type:string ;
     ShowCancel:boolean;   
     constructor(type: string ,ShowCancel:boolean){
        this.type= type;
        this.ShowCancel = ShowCancel
     }
}

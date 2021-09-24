import Swal, { SweetAlertIcon } from 'sweetalert2';

export class Alerts{

    static defaultAlert(title:string, text:string,icon:SweetAlertIcon  ){

        Swal.fire(title, text, icon);
        }
}
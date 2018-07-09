export class Login {
    username: string;
    password: string;
    company_name: string;
    photoString_company: string;
    telephoneNumber: string;
    name_user: string;
    kind: number;
    conectado: number;

    constructor(pUsername: string, pPassword: string) {
        this.username = pUsername;
        this.password = pPassword;
        this.company_name = '';
        this.photoString_company = '';
        this.telephoneNumber = '';
        this.name_user = '';
        this.kind = -1;
        this.conectado = -1;
    }
}
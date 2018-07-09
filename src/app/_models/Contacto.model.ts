export class Contacto {
    id: number;
    nombre: string;
    telefono_primario: string;
    extension: string;
    celular: string;
    cargo: string;
    fecha_nacimiento: Date;
    tipo_origen: string;
    id_origen: number;
    empresa: string;
    identidad: string;
    tipo_sangre: string;
    email_personal: string;
    telefono_oficina: string;
    email_trabajo: string;
    nombre_relacion: string;
    referencia: string;
    observaciones: string;
    valor_numerico: number;

    constructor(pID: number
        , pNombre: string
        , pTelefono_primario: string
        , pExtension: string
        , pCelular: string
        , pCargo: string
        , pFecha_nacimiento: Date
        , pTipo_origen: string
        , pId_origen: number
        , pEmpresa: string
        , pIdentidad: string
        , pTipo_sandre: string
        , pEmail_personal: string
        , pTelefono_oficina: string
        , pEmail_trabajo: string
        , pNombre_relacion: string) {
        this.id = pID;
        this.nombre = pNombre;
        this.telefono_primario = pTelefono_primario;
        this.extension = pExtension;
        this.celular = pCelular;
        this.cargo = pCargo;
        this.fecha_nacimiento = pFecha_nacimiento;
        this.tipo_origen = pTipo_origen;
        this.id_origen = pId_origen;
        this.empresa = pEmpresa;
        this.identidad = pIdentidad;
        this.tipo_sangre = pTipo_sandre;
        this.email_personal = pEmail_personal;
        this.telefono_oficina = pTelefono_oficina;
        this.email_trabajo = pEmail_trabajo;
        this.nombre_relacion = pNombre_relacion;
        this.referencia = '';
        this.observaciones = '';
        this.valor_numerico = 0;
    }
}

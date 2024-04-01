
export class CustomersResponde
{
    id: number;
    nombre_completo: string;
    telefono: string;
    correo_electronico:string ;
    fecha_nacimiento: string;
    direccion: string;
    notas: string;
    foto: string;
    genero: string;


    constructor(data: { [key: string]: unknown }) {
        this.id = data['id'] as number;
        this.nombre_completo = data['nombre_completo'] as string;
        this.telefono = data['telefono'] as string;
        this.correo_electronico = data['correo_electronico'] as string;
        this.fecha_nacimiento = data['fecha_nacimiento'] as string;
        this.direccion = data['direccion'] as string;
        this.notas = data['notas'] as string;
        this.foto = data['foto'] as string;
        this.genero = data['genero'] as string;
    }


}


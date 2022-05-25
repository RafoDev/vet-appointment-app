import Swal from "sweetalert2";
import 'animate.css';

const AppointmentsAppointment = ({ appointment, readAppointment, deleteAppointment }) => {
    const urlWhatsapp = 'https://api.whatsapp.com/send?phone=51965438142&text=Confirmo%20mi%20cita';
    const { _id, nombre, nombreDelPropietario, fecha, hora, sintomas } = appointment;

    const handleDelete = (_id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn mx-4 btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir este cambio 😮",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, borrar',
            cancelButtonText: 'No, cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAppointment(_id)
                swalWithBootstrapButtons.fire(
                    '¡Borrado!',
                    'La cita ha sido eliminada',
                    "success"
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Tu cita sigue intacta 😃',
                    'info'
                )
            }
        })
    }
    return (
        <li
            key={_id}
            className="shadow card" 
        >
            <div className="card-header d-flex justify-content-between align-items-center ">
                <p className='fw-bold mb-0 fs-4'>🐾 {nombre}</p>
                <p className='mb-0 rounded-pill bg-secondary bg-gradient text-white p-2 '><span>📆 {fecha} | 🕑 {hora} </span></p>
            </div>
            <div className="card-body grid">
                <div className="d-grid d-md-block">
                    <p>Propietario: <span> {nombreDelPropietario} </span></p>
                    <p>Sintomas: <span> {sintomas} </span></p>
                </div>
                <div className="d-flex flex-row gap-1">
                    <a
                        href={`${urlWhatsapp} Mascota: ${nombre}, Propietario: ${nombreDelPropietario}, Fecha: ${fecha}, Hora: ${hora}, Sintomas: ${sintomas}`}
                        target="_blank"
                        rel="noopener roreferrer"
                        className='btn btn-primary'
                    >
                        Confirmar Cita ✅
                    </a>
                    <button
                        className="btn btn-success"
                        onClick={() => readAppointment(_id)}
                    >Editar</button>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(_id)}
                    >Eliminar</button>
                </div>
            </div>
        </li>
    )
}

export default AppointmentsAppointment
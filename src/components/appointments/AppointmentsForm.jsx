import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AppointmentsForm = ({ appointment, createAppointment,submitAppointment }) => {

    const [formAppointment, setFormAppointment] = useState({
        _id: '',
        nombre: '',
        nombreDelPropietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [formAlert, setFormAlert] = useState(false)

    const { nombre, nombreDelPropietario, fecha, hora, sintomas } = formAppointment;

    useEffect(() => {
        if (appointment?._id) {
            const { _id, nombre, nombreDelPropietario, fecha, hora, sintomas } = appointment;
            setFormAppointment({
                _id,
                nombre,
                nombreDelPropietario,
                fecha,
                hora,
                sintomas,
            })
        }
    }, [appointment]);


    const handleChange = (e) => {
        setFormAppointment({
            ...formAppointment,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault('submit');
        
        if ([nombre.trim(), nombreDelPropietario.trim(), fecha.trim(), hora.trim(), sintomas.trim()].includes('')) {
            setFormAlert(true);
            // alert('Algo está mal');
        } else {
            await Swal.fire({
                title: 'Cita agendada! 💾',
                position: 'bottom',
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                },
                grow: 'row',
                showConfirmButton: false,
                showCloseButton: false
              })
            // createAppointment(formAppointment); // centralized in submitAppointment
            submitAppointment(formAppointment);
            setFormAppointment({
                _id:'', 
                nombre: '',
                nombreDelPropietario: '',
                fecha: '',
                hora: '',
                sintomas: ''
            });
        }
    }

    return (
        <div className=" d-flex flex-column gap-2 col-md-4 animate__animated animate__bounce">
            <form className="bg-light bg-gradient shadow p-4 text-center"
                id="formPokemon"
                onSubmit={handleSubmit}>
                <h3 className="text-center" id="formTitle">{appointment._id? 'Editar' : 'Crear'} cita</h3>
                <div className="form-floating mb-3" style={{ display: 'none'}}>
                    <input
                        type="number"
                        className="form-control"
                        name="id"
                        placeholder="Id"
                        onChange={handleChange}
                        id="formId" readOnly />
                    <label htmlFor="id">Id</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Nombre"
                        onChange={handleChange}
                        value={nombre}
                        required />
                    <label htmlFor="nombre">Nombre de la mascota</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="nombreDelPropietario"
                        placeholder="Tipo"
                        onChange={handleChange}
                        value={nombreDelPropietario}
                        required />
                    <label htmlFor="nombreDelPropietario">Nombre del propietario</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="date"
                        className="form-control"
                        name="fecha"
                        placeholder="fecha"
                        onChange={handleChange}
                        value={fecha}
                        required />
                    <label htmlFor="fecha">Fecha</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="time"
                        className="form-control"
                        name="hora"
                        placeholder="hora"
                        onChange={handleChange}
                        value={hora}
                        required />
                    <label htmlFor="hora">Hora</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="sintomas"
                        placeholder="sintomas"
                        onChange={handleChange}
                        value={sintomas}
                        required />
                    <label htmlFor="sintomas">Síntomas</label>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary" id="formButton">{!appointment._id? 'Agendar' : 'Editar'}</button>
            </form>

            {
                formAlert && <div className="align-self-center bg-danger
                badge">Todos los campos son obligatorios.</div>
            }
        </div>
    );
}

export default AppointmentsForm;
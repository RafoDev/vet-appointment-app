import AppointmentsAppointment from "./AppointmentsAppointment";
const AppointmentsCardList = ({ appointments, readAppointment,deleteAppointment }) => {
    return (

        <section className="d-flex flex-column gap-3 col-md-6">
            <h3 className="text-center text-light">Citas</h3>
            <ul className='list-group overflow-auto' style={{height : '500px'}} >
                {appointments.length ?
                    (
                        appointments.map((appointment) => {
                            return (<AppointmentsAppointment
                                key={appointment._id}
                                appointment={appointment}
                                readAppointment = {readAppointment}
                                deleteAppointment = {deleteAppointment}
                                />
                            )
                        })
                    )
                    :
                    (
                        <li
                            className="cita shadow card"
                        >
                            <div className="card-body grid">
                                <div className="d-grid d-md-block ">
                                    <p className='mb-0'>No hay citas registradas</p>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </section>
    )
};

export default AppointmentsCardList;
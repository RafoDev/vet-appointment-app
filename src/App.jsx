import './App.css';
import { v4 as uuid4 } from 'uuid';
import Header from './components/sections/Header';
import AppointmentsForm from './components/appointments/AppointmentsForm';
import { useState, useEffect } from 'react';
import AppointmentsCardList from './components/appointments/AppointmentsCardList';
import Footer from './components/sections/Footer';



function App() {

  const localAppointments = JSON.parse(localStorage.getItem('localAppointments')) ?? [];
  const [appointment, setAppointment] = useState({});
  const [appointments, setAppointments] = useState(localAppointments);



  const company = {
    name: 'Pet Lovers',
    slogan: 'Lo cuidamos porque es parte de la familia 😺',
  };

  const footerCredits = {
    author: 'Rafael David',
    year: new Date().getFullYear()
  }


  const createAppointment = appointment => {
    appointment._id = uuid4();
    const updatedAppointments = [...appointments, appointment];

    setAppointments(updatedAppointments);
    // localStorage.setItem('localAppointments', JSON.stringify(updatedAppointments));
  };
  const readAppointment = id => {
    const appointment = appointments.find(ele => ele._id === id);
    setAppointment(appointment);
  }
  const updateAppointment = appointment => {
    console.log('editar');
    const updatedAppointments = appointments.map(element => {
      return appointment._id === element._id ? appointment : element;
    });

    setAppointments(updatedAppointments);
    // localStorage.setItem('localAppointments', JSON.stringify(updatedAppointments));

    setAppointment({
      _id: '',
      nombre: '',
      nombreDelPropietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  const deleteAppointment = (id) => {
    const updatedAppointments = appointments.filter(element => element._id !== id);

    setAppointments(updatedAppointments);
    // localStorage.setItem('localAppointments', JSON.stringify(updatedAppointments));

  }

  const submitAppointment = (appointment) => {
    console.log(appointment);
    if (appointment._id === '') {
      createAppointment(appointment);
    } else {
      updateAppointment(appointment);
    }
  }

  useEffect(() => {
    localStorage.setItem('localAppointments', JSON.stringify(appointments));
  }, [appointments]);
  return (
    <>
      <Header
        company={company}
      />
      <main className=" main py-3 pb-3">
        <section className="container">
          <div className="row justify-content-between gap-4">
            <AppointmentsForm
              createAppointment={createAppointment}
              appointment={appointment}
              submitAppointment={submitAppointment}
            />
            <AppointmentsCardList
              key={1}
              appointments={appointments}
              readAppointment={readAppointment}
              deleteAppointment={deleteAppointment}
            />
          </div>
        </section>
      </main>
      <Footer
        footerCredits = {footerCredits}
      />
    </>
  );
}

export default App;

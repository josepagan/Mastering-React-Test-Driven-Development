export const Appointment = ({customer: { firstName }}) => { return (<div>{firstName}</div>) }

const appointmentTimeOfDay = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
}

export const AppointmentsDayView = ({appointments}) => {
    return (
        <div id="appointmentsDayView">
            <ol>
                {appointments.map((appt)=> <li>{appointmentTimeOfDay(appt.startsAt)}</li>
                )}
                </ol>
                <p>There are no appointments scheduled for today.</p>
            </div>
    ) 
}

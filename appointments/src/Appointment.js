export const Appointment = ({customer: { firstName }}) => { return (<div>{firstName}</div>) }

const appointmentTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
}

export const AppointmentsDayView = ({appointments}) => {
    return (
        <div id="appointmentsDayView">
            <ol>
                {appointments.map((appt)=>
                    <li key={appt.startsAt}>
                        <button type="button">
                        {appointmentTimeOfDay(appt.startsAt)}
                        </button>
                    </li>
                )}
            </ol>
            {appointments.length === 0 ? 
                    <p>There are no appointments scheduled for today.</p> :
                    <Appointment {...appointments[0]}/>}
        </div>
    ) 
}

import { Appointment, AppointmentsDayView } from '../src/Appointment'
import {render, screen} from '@testing-library/react'
import React from 'react'


describe('Appointment', () => {
    let customer
    it('renders the customer first name', ()=>{
        customer = {firstName: "Ashley"} 
        const { container } = render(<Appointment customer={customer}/>)
        expect(container.textContent).toMatch('Ashley');
    })

    it('renders another customer first name', () => {
        customer = { firstName: 'Jordan' };
        const { container } = render(<Appointment customer={customer}/>);
        expect(container.textContent).toMatch('Jordan');
    });
});

describe('AppointmentsDayView', () => {

    it('renders a div with the right id', () => {
        const {container} = render(<AppointmentsDayView appointments={[]} />);
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    });

    it('renders multiple appointments in an ol element', () => {
        const today = new Date();
        const appointments = [
            { startsAt: today.setHours(12, 0) },
            { startsAt: today.setHours(13, 0) }
        ];
        const {container} = render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelector('ol')).not.toBeNull();
        expect(
            container.querySelector('ol').children
        ).toHaveLength(2);
    });
});

//describe('specify list items', () => {
//    let container
//    const today = new Date();
//    const appointments = [
//    {
//      startsAt: today.setHours(12, 0),
//      customer: { firstName: 'Ashley' }
//    },
//    {
//      startsAt: today.setHours(13, 0),
//      customer: { firstName: 'Jordan' }
//    }
//  ];

//    beforeEach(() => {
//        container = document.createElement('div');
//    });


//    const render = component => ReactDOM.render(component, container)

//    it('initially shows a message saying there are no appointments today', () => {
//        render(<AppointmentsDayView appointments={[]} />);
//        expect(container.textContent).toMatch(
//            'There are no appointments scheduled for today.'
//        );
//    });
//    it('renders each appointment in an li', () => {
//        render(<AppointmentsDayView appointments={appointments} />);
//        expect(container.querySelectorAll('li')).toHaveLength(2);
//        expect(
//            container.querySelectorAll('li')[0].textContent
//        ).toEqual('12:00');
//        expect(
//            container.querySelectorAll('li')[1].textContent
//        ).toEqual('13:00');
//    });
//    //the first appt is ashley so it should appear by default
//    it('selects the first appointment by default', () => {
//        render(<AppointmentsDayView appointments={appointments} />);
//        expect(container.textContent).toMatch('Ashley');
//    });
//});

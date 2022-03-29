import EventTemp from "./EventTemp"
const Events = () => {
    const autoEvents = [
        {
            id: 1,
            eventName: 'Security Lights',
            time: '7:00 PM - 6:00 AM',
            enable: true
        },
        {
            id: 2,
            eventName: 'Water Heater',
            time: '7:00 PM - 6:00 AM',
            enable: false
        },
        {
            id: 3,
            eventName: 'Water Pump',
            time: '7:00 PM - 6:00 AM',
            enable: true
        }
    ]
    return (
        <>
            <h2>Timers</h2>
        {
            
            autoEvents.map((_events)=>(
            <EventTemp key={_events.id} _event={_events}/>
            ))
        }
        </>
    )
}

export default Events
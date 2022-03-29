import { DiBitbucket} from 'react-icons/di'
const EventTemp = ({_event}) => {
    return (
        <div >
            <div className="events">
                <h3>
                    <label className="events-control-check label">
                        {_event.eventName}</label>
                    <DiBitbucket style={{color: 'green'}}/>
                </h3>
                <p>{`${_event.time}`}</p>
            </div>

        </div>
    )
}

export default EventTemp
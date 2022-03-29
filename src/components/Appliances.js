import { RiLightbulbFlashLine } from 'react-icons//ri'

const Appliances = ({ appliance }) => {
    return (
        
        <button className={`btn`}>
            <RiLightbulbFlashLine color='red' width={`20px`}/>
            <p>{appliance}</p>
        </button>

    )
}

export default Appliances
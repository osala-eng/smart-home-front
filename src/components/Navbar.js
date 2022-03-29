import { DiAptana } from "react-icons/di"
import PropTypes from 'prop-types'

const Navbar = ({name}) => {
  return (
    <header className="navbar">
        <h1>{name}</h1>
        <DiAptana className="settings"/>

    </header>
  )
}

Navbar.defaultProps={
    name: 'Smart Home',
}
Navbar.propTypes={
    name: PropTypes.string,
}
export default Navbar
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e);
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// Can apply object styling as well

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header

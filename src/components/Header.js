import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({ title }) => {
  const onClick = () => {
    document.querySelector('.btn').style.backgroundColor = 'steelblue';
}
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Added' onClick={onClick} />
    </header>
  )
}


// setting default props
Header.defaultProps = {
  title: 'Task Flow'
}

Header.prototype = {
  title: PropTypes.string.isRequired
}

// CSS in JS
const headColors = {
  color: 'blue',
  backgroundColor: 'gray'
}

export default Header;
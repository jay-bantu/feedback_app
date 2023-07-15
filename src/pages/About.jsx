import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

const About = () => {
  return (
    <Card>
      <div>
        <h1>About This App</h1>
        <p>
          This is a React app to leave feedback for a product or service
          provided
        </p>
        <Link to='/'>
          <p>back to home</p>
        </Link>
      </div>
    </Card>
  )
}

export default About

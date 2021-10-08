import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RapperCard = ({rapper}) => {
  return (
    <Card id='cardBackground' >
    <Card.Img variant="top" src={rapper.picture} style={{height: '35vh'}} />
    <Card.Body>
      <Card.Title>{rapper.name}</Card.Title>
      <Card.Title>{rapper.country}</Card.Title>
      <Link to={`/rapperDetails/${rapper._id}`} className='btn btn-outline-info'>See Details</Link>
    </Card.Body>
    </Card>
  )
}

export default RapperCard;
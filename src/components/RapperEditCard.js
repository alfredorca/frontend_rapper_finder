import { useContext } from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RapperContext } from '../context/RapperContext'
import { useHistory } from 'react-router'

const RapperEditCard = ({rapper}) => {
  const {deleteRapper} = useContext(RapperContext)
  const history = useHistory();

  const handleDeletion = (event) => {
    event.preventDefault()
    deleteRapper(rapper._id)
    history.push('/editordeleterapper')
  }

  return (
    <Card id='cardBackground' >
    <Card.Img variant="top" src={rapper.picture} style={{height: '35vh'}} />
    <Card.Body>
      <Card.Title>{rapper.name}</Card.Title>
      <Card.Title>{rapper.country}</Card.Title>
      <Link to={`/editrapper/${rapper._id}`} className='btn btn-outline-primary' style={{marginRight: '4%'}}>Edit</Link>
      <button onClick={handleDeletion} className='btn btn-outline-danger'>Delete</button>
    </Card.Body>
    </Card>
  )
}

export default RapperEditCard;
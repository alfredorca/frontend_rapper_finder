import { useContext } from "react"
import RapperEditCard from "../components/RapperEditCard"
import { RapperContext } from "../context/RapperContext"
const RapperEditView = () => {
  const {rappers} = useContext(RapperContext)
  return (
    <section className='backgroundHome'>
    <section className='tryout container row'>
      {rappers && rappers.map((r, i) => (
        <div key={i} className='col-4 mb-4'>
          <RapperEditCard rapper={r}/>
        </div>
      ))}
    </section>
    </section>
  )
}

export default RapperEditView

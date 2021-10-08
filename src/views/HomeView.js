import { useContext } from "react"
import RapperCard from "../components/RapperCard"
import { RapperContext } from "../context/RapperContext"
const HomeView = () => {
  const {rappers} = useContext(RapperContext)
  return (
    <section className='backgroundHome'>
    <section className='tryout container row'>
      {rappers && rappers.map((r, i) => (
        <div key={i} className='col-4 mb-4'>
          <RapperCard rapper={r}/>
        </div>
      ))}
    </section>
    </section>
  )
}

export default HomeView

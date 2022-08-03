import { Aside } from '../../Components/Aside'
import { Section } from '../../Components/Section'
import { Footer } from '../../Components/Footer'
import './styles.css'

export function Home() { 
  
  return (
    <>
      <div className='containerHome'>
        <Aside />
        <Section />
      </div>
      <Footer />
    </>
  )
}

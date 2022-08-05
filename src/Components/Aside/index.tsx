import './styles.css'
import 'react-dom'
import CellPhone from '../../Assets/cellphone1.png'
import CellPhone2 from '../../Assets/cellphone2.png'
import CellPhone3 from '../../Assets/cellphone3.png'
import CellPhone4 from '../../Assets/cellphone4.png'


export function Aside(){   

    return (
        <>
        <div className="aside">
            <div className='content'>
                <img className='active'src={CellPhone} alt="" />
                <img className='active'src={CellPhone2} alt="" />
                <img className='active'src={CellPhone3} alt="" />
                <img className='active'src={CellPhone4} alt="" />    
            </div>  
        </div>
        </>
    )
}
import './styles.css'

export function Section(){
    return (
        <div className='formContainer'>
        <form className='form'>
            <input type='text' />
            <input type="password" />
            <button>Enviar</button>
        </form>
        </div>
    )
}
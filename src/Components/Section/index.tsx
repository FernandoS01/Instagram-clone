import './styles.css'
import Logo from '../../Assets/logo.png'
import ButtonPlayStore from '../../Assets/buttonPlayStore.png'
import ButtonAppleStore from '../../Assets/buttonAppleStore.png'

export function Section(){
    return (
        <div className='formContainer'>
        <form className='form'>
            <img src={Logo} alt="" />
            <input type='text' placeholder='Telefone, nome de usuário ou e-mail' />
            <input type="password"placeholder='Senha'/>
            <button>Enviar</button>
            <span>Ou</span>
            <a href=''>Entrar com o facebook</a>
            <a href=''>Esqueceu a senha?</a>
        </form>
        <div className='signUp'>
            <span>Não tem uma conta?<a href=''>Cadastre-se</a></span>
        </div>
        <div className='buttons'>
            <p>Obtenha o aplicativo.</p>
            <a href=''><img src={ButtonAppleStore} alt="" /></a>
            <a href=''><img src={ButtonPlayStore} alt="" /></a>
        </div>
        </div>
    )
}
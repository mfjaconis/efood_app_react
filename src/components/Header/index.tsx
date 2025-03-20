import { HeaderContainer, Logo, P } from './style'
import logo from '../../assets/images/logo.svg'

function Header() {
    return (
        <>
            <HeaderContainer>
                <img src={logo}  alt="Logo Efood"/>
                <P>Viva experiências gastronômicas no conforto da sua casa</P>
            </HeaderContainer>
        </>
    )
}

export default Header
import logo from "../../assets/images/logo.svg";
import { HeaderContainer, P } from "./style";

function Header() {
	return (
		<>
			<HeaderContainer>
				<div className="container">
					<img src={logo} alt="Logo Efood" />
					<P>Viva experiências gastronômicas no conforto da sua casa</P>
				</div>
			</HeaderContainer>
		</>
	);
}

export default Header;

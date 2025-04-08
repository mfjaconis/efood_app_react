import logo from "../../assets/images/logo.svg";
import {
	ButtonOpenCart,
	HeaderContainer,
	HeaderPerfilContainer,
	LinkToHome,
	P,
} from "./style";

export type Props = {
	home?: boolean;
};

function Header({ home }: Props) {
	return (
		<>
			<HeaderContainer home={home}>
				<div className="container">
					{home ? (
						<>
							<img src={logo} alt="Logo Efood" />
							<P home={home}>
								Viva experiências gastronômicas <br />
								no conforto da sua casa
							</P>
						</>
					) : (
						<>
							<HeaderPerfilContainer>
								<LinkToHome to={"/"}>Restaurantes</LinkToHome>
								<img src={logo} alt="Logo Efood" />
								<ButtonOpenCart>0 produto(s) no carrinho</ButtonOpenCart>
							</HeaderPerfilContainer>
						</>
					)}
				</div>
			</HeaderContainer>
		</>
	);
}

export default Header;

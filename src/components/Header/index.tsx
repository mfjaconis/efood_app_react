import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.svg";
import { RootState } from "../../store";
import ModalCart from "../ModalCart";
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
	const [isCartModalOpen, setIsCartModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsCartModalOpen(true);
	};

	const cart = useSelector((state: RootState) => state.cart.items);

	const totalItems = cart.length;

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
								<ButtonOpenCart onClick={handleOpenModal}>
									{totalItems} produto(s) no carrinho
								</ButtonOpenCart>
							</HeaderPerfilContainer>
						</>
					)}
				</div>
			</HeaderContainer>
			{isCartModalOpen && (
				<ModalCart onClose={() => setIsCartModalOpen(false)} />
			)}
		</>
	);
}

export default Header;

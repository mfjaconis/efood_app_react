import { useEffect, useState } from "react";
import type { CardapioItem } from "../../App";
import CardProducts from "../CardProducts/index";
import ModalProducts from "../ModalProducts";
import { List, ListContainer } from "./styles";

type ListProductsProps = {
	restaurantId: string;
};

function ListProducts({ restaurantId }: ListProductsProps) {
	const [cardapio, setCardapio] = useState<CardapioItem[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<CardapioItem>();

	useEffect(() => {
		fetch(
			`https://fake-api-tau.vercel.app/api/efood/restaurantes/${restaurantId}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setCardapio(data.cardapio);
			});
	}, [restaurantId]);

	const openModal = (productId: number) => {
		const product = cardapio.find((item) => item.id === productId);
		setSelectedProduct(product);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<ListContainer>
				<div className="container">
					<List>
						{cardapio.map((item) => {
							return (
								<CardProducts
									key={item.id}
									cardapio={item}
									onClick={() => openModal(item.id)}
								/>
							);
						})}
					</List>
				</div>
			</ListContainer>

			{isModalOpen && selectedProduct && (
				<ModalProducts product={selectedProduct} onClose={closeModal} />
			)}
		</>
	);
}

export default ListProducts;

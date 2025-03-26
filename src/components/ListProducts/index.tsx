import { useEffect, useState } from "react";
import CardProducts from "../CardProducts/index";
import ModalProducts from "../ModalProducts";
import { List, ListContainer } from "./styles";

type ListProductsProps = {
	restaurantId: string;
};

type CardapioProps = {
	id: number;
	nome: string;
	descricao: string;
	foto: string;
	preco: number;
	porcao: string;
};

function ListProducts({ restaurantId }: ListProductsProps) {
	const [cardapio, setCardapio] = useState<CardapioProps[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<CardapioProps>();

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
									image={item.foto}
									title={item.nome}
									description={item.descricao}
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

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import type { CardapioItem } from "../../App";
import { useGetMenuRestaurantsByIdQuery } from "../../services/api";
import { add } from "../../store/reducer/cart";
import CardProducts from "../CardProducts/index";
import ModalProducts from "../ModalProducts";
import { List, ListContainer } from "./styles";

type ProductParams = {
	id: string;
};

function ListProducts() {
	const { id } = useParams() as ProductParams;
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<CardapioItem>();

	const dispatch = useDispatch();

	const { data, isError, isLoading } = useGetMenuRestaurantsByIdQuery(id);

	const openModal = (productId: number) => {
		const product = data?.cardapio?.find((item) => item.id === productId);
		if (product) {
			setSelectedProduct(product);
			setIsModalOpen(true);
		}
	};
	const handleAddToCart = (product: CardapioItem) => {
		dispatch(add(product));
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	if (isLoading) {
		return <div>Carregando...</div>;
	}

	if (isError) {
		return <div>Ocorreu um erro ao carregar os dados.</div>;
	}

	if (!data || !data.cardapio || data.cardapio.length === 0) {
		return <div>Não há itens no cardápio.</div>;
	}

	return (
		<>
			<ListContainer>
				<div className="container">
					<List>
						{data.cardapio.map((item) => {
							return (
								<CardProducts
									key={item.id}
									cardapioItem={item}
									onClick={() => openModal(item.id)}
								/>
							);
						})}
					</List>
				</div>
			</ListContainer>

			{isModalOpen && selectedProduct && (
				<ModalProducts
					product={selectedProduct}
					onClose={closeModal}
					onAddToCart={handleAddToCart}
				/>
			)}
		</>
	);
}

export default ListProducts;

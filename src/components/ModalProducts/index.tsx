import { useState } from "react";
import Button from "../Button";
import {
	ButtonCloseModal,
	ImageModal,
	ModalContainer,
	ModelCard,
	ModelInfos,
	ParagraphInfo,
} from "./style";

type Product = {
	id: number;
	nome: string;
	descricao: string;
	preco: number;
	porcao: string;
	foto: string;
};

type ModalProductsProps = {
	product: Product;
	onClose: () => void;
};

function ModalProducts({ product, onClose }: ModalProductsProps) {
	const [cart, setCart] = useState<Product[]>([]);
	const formattedPrice = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(product.preco);

	const handleAddToCart = () => {
		setCart((prevCart) => [...prevCart, product]);
		console.log(cart);
	};

	return (
		<ModalContainer>
			<div className="container">
				<ModelCard>
					<ButtonCloseModal onClick={onClose}>X</ButtonCloseModal>
					<ImageModal src={product.foto} alt={product.nome} />
					<ModelInfos>
						<h2>{product.nome}</h2>
						<ParagraphInfo>{product.descricao}</ParagraphInfo>
						<ParagraphInfo>Serve: de {product.porcao}</ParagraphInfo>
						<Button modal={true} onClick={handleAddToCart}>
							Adicionar ao carrinho - {formattedPrice}
						</Button>
					</ModelInfos>
				</ModelCard>
			</div>
		</ModalContainer>
	);
}

export default ModalProducts;

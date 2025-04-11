import type { CardapioItem } from "../../App";
import Button from "../Button";
import {
	ButtonCloseModal,
	ImageModal,
	ModalContainer,
	ModelCard,
	ModelInfos,
	ParagraphInfo,
} from "./style";

type ModalProductsProps = {
	product: CardapioItem;
	onClose: () => void;
	onAddToCart: (product: CardapioItem) => void;
};

function ModalProducts({ product, onClose, onAddToCart }: ModalProductsProps) {
	const formattedPrice = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(product.preco);

	const handleAddToCart = () => {
		onAddToCart(product);
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

import {
	ContentValue,
	ImageModal,
	ModalContainer,
	ModelCard,
	ModelContent,
	ModelInfos,
	ParagraphPrice,
	TitleProdutc,
	TrashButton,
} from "./style";

import type { CardapioItem } from "../../App";
import Trash from "../../assets/images/lixeira-de-reciclagem 1.png";
import Button from "../Button";

type ModalCartProps = {
	cart: CardapioItem[];
};

function ModalCart({ cart }: ModalCartProps) {
	const handleOpenCart = () => {
		alert("proxima pagina");
	};

	const total = cart.reduce((acc, item) => acc + item.preco, 0);
	const formattedTotal = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(total);
	const formatPrice = (price: number) =>
		new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format(price);

	return (
		<ModalContainer>
			<ModelCard>
				{cart.map((item) => (
					<ModelInfos key={item.id}>
						<ImageModal src={item.foto} alt={item.nome} />
						<ModelContent>
							<TitleProdutc>{item.nome}</TitleProdutc>
							<ParagraphPrice>{formatPrice(item.preco)}</ParagraphPrice>
						</ModelContent>
						<TrashButton>
							<img src={Trash} alt="Excluir produto" />
						</TrashButton>
					</ModelInfos>
				))}
				<ContentValue>
					<p>Valor total</p>
					<p>{formattedTotal}</p>
				</ContentValue>
				<Button onClick={handleOpenCart}>Continuar com a entrega</Button>
			</ModelCard>
		</ModalContainer>
	);
}

export default ModalCart;

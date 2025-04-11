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

import { useDispatch, useSelector } from "react-redux";
import Trash from "../../assets/images/lixeira-de-reciclagem 1.png";
import type { RootState } from "../../store";
import { remove } from "../../store/reducer/cart";
import Button from "../Button";

type ModalCartProps = {
	onClose: () => void;
};

function ModalCart({ onClose }: ModalCartProps) {
	const dispatch = useDispatch();

	const cart = useSelector((state: RootState) => state.cart.items);

	const handleRemoveToCart = (id: number) => {
		dispatch(remove(id));
	};

	const handleOpenCart = () => {
		alert("proxima pagina");
	};

	const total = cart.reduce((acc, item) => acc + item.preco, 0);

	const formatPrice = (price: number) =>
		new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format(price);

	const handleClickOutside = (_event: React.MouseEvent<HTMLDivElement>) => {
		onClose();
	};

	return (
		<ModalContainer onClick={handleClickOutside}>
			<ModelCard onClick={(event) => event.stopPropagation()}>
				{cart.map((item) => (
					<ModelInfos key={item.id}>
						<ImageModal src={item.foto} alt={item.nome} />
						<ModelContent>
							<TitleProdutc>{item.nome}</TitleProdutc>
							<ParagraphPrice>{formatPrice(item.preco)}</ParagraphPrice>
						</ModelContent>
						<TrashButton onClick={() => handleRemoveToCart(item.id)}>
							<img src={Trash} alt="Excluir produto" />
						</TrashButton>
					</ModelInfos>
				))}
				<ContentValue>
					<p>Valor total</p>
					<p>{formatPrice(total)}</p>
				</ContentValue>
				<Button onClick={handleOpenCart}>Continuar com a entrega</Button>
			</ModelCard>
		</ModalContainer>
	);
}

export default ModalCart;

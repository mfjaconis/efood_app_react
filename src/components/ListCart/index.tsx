import { useDispatch, useSelector } from "react-redux";

import Trash from "../../assets/images/lixeira-de-reciclagem 1.png";
import type { RootState } from "../../store";
import { remove } from "../../store/reducer/cart";
import Button from "../Button";
import {
	ContentValue,
	ImageModal,
	ModelContent,
	ModelInfos,
	ParagraphPrice,
	TitleProdutc,
	TrashButton,
} from "./style";

type ListCartProps = {
	onForm: () => void;
};

function ListCart({ onForm }: ListCartProps) {
	const dispatch = useDispatch();

	const cart = useSelector((state: RootState) => state.cart.items);

	const handleRemoveToCart = (id: number) => {
		dispatch(remove(id));
	};

	const handleContinue = () => {
		if (cart.length === 0) {
			alert("Seu carrinho está vazio. Adicione itens antes de continuar.");
			return;
		}
		onForm();
	};

	const total = cart.reduce((acc, item) => acc + item.preco, 0);

	const formatPrice = (price: number) =>
		new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format(price);

	return (
		<>
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
			<Button onClick={handleContinue}>Continuar com a entrega</Button>
		</>
	);
}
export default ListCart;

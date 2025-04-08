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

import Trash from "../../assets/images/lixeira-de-reciclagem 1.png";
import Button from "../Button";

type CartProps = {
	onClick: () => void;
};

function ModalCart({ onClick }: CartProps) {
	return (
		<ModalContainer>
			<ModelCard>
				<ModelInfos>
					<ImageModal />
					<ModelContent>
						<TitleProdutc>Pizza Marguerita</TitleProdutc>
						<ParagraphPrice>R$ 60,90</ParagraphPrice>
					</ModelContent>
					<TrashButton>
						<img src={Trash} alt="" />
					</TrashButton>
				</ModelInfos>
				<ContentValue>
					<p>Valor total</p>
					<p>R$ 182,70</p>
				</ContentValue>
				<Button onClick={onClick}>Continuar com a entrega</Button>
			</ModelCard>
		</ModalContainer>
	);
}

export default ModalCart;

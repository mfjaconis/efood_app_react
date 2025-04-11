import type { CardapioItem } from "../../App";
import Button from "../Button";
import { CardContainer, Image, InfoCard, Paragraph, Title } from "./style";

type ProductsCardProps = {
	cardapioItem: CardapioItem;
	onClick: () => void;
};

function CardProducts({ cardapioItem, onClick }: ProductsCardProps) {
	return (
		<CardContainer>
			<Image src={cardapioItem.foto} alt="Imagem do restaurante" />
			<InfoCard>
				<Title>{cardapioItem.nome}</Title>
				<Paragraph>{cardapioItem.descricao}</Paragraph>
				<Button onClick={onClick}>Mais detalhes</Button>
			</InfoCard>
		</CardContainer>
	);
}

export default CardProducts;

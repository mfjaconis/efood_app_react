import type { CardapioItem } from "../../App";
import Button from "../Button";
import { CardContainer, Image, InfoCard, Paragraph, Title } from "./style";

type ProductsCardProps = {
	cardapio: CardapioItem;
	onClick: () => void;
};

function CardProducts({ cardapio, onClick }: ProductsCardProps) {
	return (
		<CardContainer>
			<Image src={cardapio.foto} alt="Imagem do restaurante" />
			<InfoCard>
				<Title>{cardapio.nome}</Title>
				<Paragraph>{cardapio.descricao}</Paragraph>
				<Button onClick={onClick}>Mais detalhes</Button>
			</InfoCard>
		</CardContainer>
	);
}

export default CardProducts;

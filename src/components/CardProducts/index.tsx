import Button from "../Button";
import { CardContainer, Image, InfoCard, Paragraph, Title } from "./style";

type ProductsCardProps = {
	title: string;
	image: string;
	description: string;
	onClick: () => void;
};

function CardProducts({
	title,
	description,
	image,
	onClick,
}: ProductsCardProps) {
	return (
		<CardContainer>
			<Image src={image} alt="Imagem do restaurante" />
			<InfoCard>
				<Title>{title}</Title>
				<Paragraph>{description}</Paragraph>
				<Button onClick={onClick}>Mais detalhes</Button>
			</InfoCard>
		</CardContainer>
	);
}

export default CardProducts;

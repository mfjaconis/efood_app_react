import Button from "../Button";
import { CardContainer, Image, InfoCard, Paragraph, Title } from "./style";

type ProductsCardProps = {
	title: string;
	image: string;
	description: string;
};

function CardProducts({ title, description, image }: ProductsCardProps) {
	return (
		<CardContainer>
			<Image src={image} alt="Imagem do restaurante" />
			<InfoCard>
				<Title>{title}</Title>
				<Paragraph>{description}</Paragraph>
				<Button>Adicionar ao carrinho</Button>
			</InfoCard>
		</CardContainer>
	);
}

export default CardProducts;

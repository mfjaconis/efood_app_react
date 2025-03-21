import ProductImage from "../../assets/images/pizza.svg";
import Button from "../Button";
import { CardContainer, Image, InfoCard, Paragraph, Title } from "./style";

type ProductsCardProps = {
	title: string;
	description: string;
};

function CardProducts({ title, description }: ProductsCardProps) {
	return (
		<CardContainer>
			<Image src={ProductImage} alt="Imagem do restaurante" />
			<InfoCard>
				<Title>{title}</Title>
				<Paragraph>{description}</Paragraph>
				<Button>Adicionar ao carrinho</Button>
			</InfoCard>
		</CardContainer>
	);
}

export default CardProducts;

import ProductImage from "../../assets/images/pizza.svg";
import Tag from "../Tag";
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
				<Tag to="/perfil">Saiba Mais</Tag>
			</InfoCard>
		</CardContainer>
	);
}

export default CardProducts;

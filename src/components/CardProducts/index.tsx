import RestaurantImg from "../../assets/images/comida-japonesa.svg";
import Tag from "../Tag";
import { CardContainer, Image, InfoCard, Paragraph } from "./style";

type ProductsCardProps = {
	title: string;
	description: string;
};

function CardProducts({ title, description }: ProductsCardProps) {
	return (
		<CardContainer>
			<Image src={RestaurantImg} alt="Imagem do restaurante" />
			<InfoCard>
				<h3>{title}</h3>
				<Paragraph>{description}</Paragraph>
				<Tag to="/perfil">Saiba Mais</Tag>
			</InfoCard>
		</CardContainer>
	);
}

export default CardProducts;

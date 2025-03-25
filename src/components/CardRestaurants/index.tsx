import Star from "../../assets/images/star.svg";
import Tag from "../Tag";
import {
	CardContainer,
	ContentName,
	Image,
	InfoCard,
	Paragraph,
	TagsContainer,
} from "./style";

type RestaurantCardProps = {
	title: string;
	image: string;
	categories: string[];
	rating: string;
	description: string;
};

function CardRestaurants({
	title,
	image,
	categories,
	rating,
	description,
}: RestaurantCardProps) {
	return (
		<CardContainer>
			<Image src={image} alt="Imagem do restaurante" />
			<TagsContainer>
				{Array.isArray(categories) &&
					categories.map((category) => <Tag key={category}>{category}</Tag>)}
			</TagsContainer>
			<InfoCard>
				<ContentName>
					<h3>{title}</h3>
					<h3>
						{rating} <img src={Star} alt="" />
					</h3>
				</ContentName>
				<Paragraph>{description}</Paragraph>
				<Tag to="/perfil">Saiba Mais</Tag>
			</InfoCard>
		</CardContainer>
	);
}

export default CardRestaurants;

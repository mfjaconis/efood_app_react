import RestaurantImg from "../../assets/images/comida-japonesa.svg";
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

function CardRestaurants() {
	return (
		<>
			<CardContainer>
				<Image src={RestaurantImg} alt="Imagem do restaurante" />
				<TagsContainer>
					<Tag>Destaque da semana</Tag>
					<Tag>Japonesa</Tag>
				</TagsContainer>
				<InfoCard>
					<ContentName>
						<h3>Nome do restaurante</h3>
						<h3>
							4.9 <img src={Star} alt="" />
						</h3>
					</ContentName>
					<Paragraph>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
						eligendi recusandae facere optio ratione quo accusamus consequatur
						cum illo consequuntur rerum reprehenderit perferendis iure, autem
						quidem, quam corporis reiciendis libero?
					</Paragraph>
					<button>Saiba Mais</button>
				</InfoCard>
			</CardContainer>
		</>
	);
}

export default CardRestaurants;

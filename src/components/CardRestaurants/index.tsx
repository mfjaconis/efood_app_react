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
						A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
						você! Desfrute de massas caseiras, pizzas deliciosas e risotos
						incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
						embalados e sabor inesquecível. Peça já!
					</Paragraph>
					<Tag to="/perfil">Saiba Mais</Tag>
				</InfoCard>
			</CardContainer>
		</>
	);
}

export default CardRestaurants;

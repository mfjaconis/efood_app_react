import type { Restaurante } from "../../App";
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

function CardRestaurants({
	id,
	titulo,
	tipo,
	destacado,
	avaliacao,
	descricao,
	capa,
}: Restaurante) {
	return (
		<CardContainer>
			<Image src={capa} alt="Imagem do restaurante" />
			<TagsContainer>
				{destacado && <Tag>Destaque da semana</Tag>}
				<Tag>{tipo}</Tag>
			</TagsContainer>
			<InfoCard>
				<ContentName>
					<h3>{titulo}</h3>
					<h3>
						{avaliacao} <img src={Star} alt="" />
					</h3>
				</ContentName>
				<Paragraph>{descricao}</Paragraph>
				<Tag to={`/perfil/${id}`}>Saiba Mais</Tag>
			</InfoCard>
		</CardContainer>
	);
}

export default CardRestaurants;

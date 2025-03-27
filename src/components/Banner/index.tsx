import type { Restaurante } from "../../App";
import { ContainerBanner, TitleRestaurant, TypeRestaurant } from "./style";

function Banner({ tipo, titulo, capa }: Restaurante) {
	return (
		<ContainerBanner style={{ backgroundImage: `url(${capa})` }}>
			<div className="container">
				<TypeRestaurant>{tipo}</TypeRestaurant>
				<TitleRestaurant>{titulo}</TitleRestaurant>
			</div>
		</ContainerBanner>
	);
}

export default Banner;

import { ContainerBanner, TitleRestaurant, TypeRestaurant } from "./style";

function Banner() {
	return (
		<ContainerBanner>
			<div className="container">
				<TypeRestaurant>Italiana</TypeRestaurant>
				<TitleRestaurant>La Dolce Vita Trattoria</TitleRestaurant>
			</div>
		</ContainerBanner>
	);
}

export default Banner;

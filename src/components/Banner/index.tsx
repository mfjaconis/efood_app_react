import { ContainerBanner, TitleRestaurant, TypeRestaurant } from "./style";

interface BannerProps {
	tipo: string;
	titulo: string;
	capa: string;
}
  
function Banner({ tipo, titulo, capa }: BannerProps) {
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

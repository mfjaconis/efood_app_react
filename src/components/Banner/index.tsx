import { ContainerBanner, TitleRestaurant, TypeRestaurant } from "./style";

type BannerProps = {
	capa: string;
	tipo: string;
	title: string;
};

function Banner({ tipo, title, capa }: BannerProps) {
	return (
		<ContainerBanner style={{ backgroundImage: `url(${capa})` }}>
			<div className="container">
				<TypeRestaurant>{tipo}</TypeRestaurant>
				<TitleRestaurant>{title}</TitleRestaurant>
			</div>
		</ContainerBanner>
	);
}

export default Banner;

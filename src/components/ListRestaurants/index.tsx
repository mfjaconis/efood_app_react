import { useEffect, useState } from "react";
import CardRestaurants from "../CardRestaurants/index";
import { List, ListContainer } from "./styles";

type RestaurantsProps = {
	id: number;
	titulo: string;
	destacado: boolean;
	tipo: string;
	avaliacao: number;
	descricao: string;
	capa: string;
};

function ListRestaurants() {
	const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

	useEffect(() => {
		fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
			.then((res) => res.json())
			.then((data) => {
				setRestaurants(data);
			});
	}, []);

	return (
		<ListContainer>
			<div className="container">
				<List>
					{restaurants.map((restaurant) => {
						const categories = [restaurant.tipo];
						if (restaurant.destacado) {
							categories.unshift("Destaque da semana");
						}
						return (
							<CardRestaurants
								key={restaurant.id}
								image={restaurant.capa}
								title={restaurant.titulo}
								rating={restaurant.avaliacao.toString()}
								categories={categories}
								description={restaurant.descricao}
								id={restaurant.id}
							/>
						);
					})}
				</List>
			</div>
		</ListContainer>
	);
}

export default ListRestaurants;

import { useEffect, useState } from "react";
import type { Restaurante } from "../../App";
import CardRestaurants from "../CardRestaurants/index";
import { List, ListContainer } from "./styles";

function ListRestaurants() {
	const [restaurants, setRestaurants] = useState<Restaurante[]>([]);

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
						return (
							<CardRestaurants
								key={restaurant.id}
								capa={restaurant.capa}
								titulo={restaurant.titulo}
								avaliacao={restaurant.avaliacao}
								tipo={restaurant.tipo}
								descricao={restaurant.descricao}
								id={restaurant.id}
								destacado={restaurant.destacado}
								cardapio={restaurant.cardapio}
							/>
						);
					})}
				</List>
			</div>
		</ListContainer>
	);
}

export default ListRestaurants;

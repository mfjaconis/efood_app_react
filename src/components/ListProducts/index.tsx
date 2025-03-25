import { useEffect, useState } from "react";
import CardProducts from "../CardProducts/index";
import { List, ListContainer } from "./styles";

type ListProductsProps = {
	restaurantId: string;
};

type CardapioProps = {
	id: number;
	nome: string;
	descricao: string;
	foto: string;
};

function ListProducts({ restaurantId }: ListProductsProps) {
	const [cardapio, setCardapio] = useState<CardapioProps[]>([]);

	useEffect(() => {
		fetch(
			`https://fake-api-tau.vercel.app/api/efood/restaurantes/${restaurantId}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setCardapio(data.cardapio);
				console.log(data.cardapio);
			});
	}, [restaurantId]);

	return (
		<>
			<ListContainer>
				<div className="container">
					<List>
						{cardapio.map((item) => {
							return (
								<CardProducts
									key={item.id}
									image={item.foto}
									title={item.nome}
									description={item.descricao}
								/>
							);
						})}
					</List>
				</div>
			</ListContainer>
		</>
	);
}

export default ListProducts;

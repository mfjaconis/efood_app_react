import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Banner from "../../components/Banner";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import type { Restaurante } from "../../App";



function Perfil() {
	const [restaurantData, setRestaurantData] = useState<Restaurante>();

	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	useEffect(() => {
		if (!id) {
			navigate("/");
			return;
		}
		fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setRestaurantData(data);
			});
	}, [id, navigate]);

	if (!restaurantData) {
		return <div>Carregando...</div>;
	}

	return (
		<>
			<Header />
			<Banner
				tipo={restaurantData.tipo}
				titulo={restaurantData.titulo}
				capa={restaurantData.capa} 
					/>
			<ListProducts restaurantId={id as string} />
		</>
	);
}

export default Perfil;

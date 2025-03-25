import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Banner from "../../components/Banner";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";

function Perfil() {
	const [restaurantData, setRestaurantData] = useState<{
		name: string;
		type: string;
		image: string;
	} | null>(null);

	const { id } = useParams<{ id: string | undefined }>();
	const navigate = useNavigate();

	useEffect(() => {
		if (!id) {
			navigate("/");
			return;
		}
		fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setRestaurantData({
					name: data.titulo,
					type: data.tipo,
					image: data.capa,
				});
			});
	}, [id, navigate]);

	if (!restaurantData) {
		return <div>Carregando...</div>;
	}

	return (
		<>
			<Header />
			<Banner
				tipo={restaurantData.type}
				title={restaurantData.name}
				capa={restaurantData.image}
			/>
			<ListProducts restaurantId={id as string} />
		</>
	);
}

export default Perfil;

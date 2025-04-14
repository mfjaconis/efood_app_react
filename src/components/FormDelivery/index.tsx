import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { updateClient } from "../../store/reducer/client";
import Button from "../Button";
import { ContainerEnd, ContentEnd, ContianerForm, FormStyle } from "./styles";

type FormDeliveryProps = {
	onBack: () => void;
	onSubmit: () => void;
};

function FormDelivery({ onBack, onSubmit }: FormDeliveryProps) {
	const dispatch = useDispatch();
	const clientData = useSelector((state: RootState) => state.client);

	const handleChange = () => {
		dispatch(
			updateClient({
				name: value,
				receiver: "",
				address: "",
				city: "",
				cep: "",
				number: "",
			}),
		);
	};

	const handleContinue = () => {
		if (
			clientData.receiver &&
			clientData.address &&
			clientData.city &&
			clientData.cep &&
			clientData.number
		) {
			onSubmit();
		} else {
			alert("Por favor, preencha todos os campos obrigatórios.");
		}
	};

	return (
		<ContianerForm>
			<h2>Entrega</h2>
			<FormStyle>
				<label htmlFor="receiver">Quem irá receber</label>
				<input
					type="text"
					id="receiver"
					name="receiver"
					value={clientData.receiver}
					onChange={handleChange}
				/>

				<label htmlFor="address">Endereço</label>
				<input
					type="text"
					id="address"
					name="address"
					value={clientData.address}
					onChange={handleChange}
				/>

				<label htmlFor="city">Cidade</label>
				<input
					type="text"
					id="city"
					name="city"
					value={clientData.city}
					onChange={handleChange}
				/>

				<ContainerEnd>
					<ContentEnd>
						<label htmlFor="cep">CEP</label>
						<input
							type="text"
							id="cep"
							name="cep"
							value={clientData.cep}
							onChange={handleChange}
						/>
					</ContentEnd>
					<ContentEnd>
						<label htmlFor="number">Número</label>
						<input
							type="text"
							id="number"
							name="number"
							value={clientData.number}
							onChange={handleChange}
						/>
					</ContentEnd>
				</ContainerEnd>

				<label htmlFor="complement">Complemento (opcional)</label>
				<input
					type="text"
					id="complement"
					name="complement"
					value={clientData.complement}
					onChange={handleChange}
				/>
			</FormStyle>
			<Button onClick={handleContinue}>Continuar com o pagamento</Button>
			<Button onClick={onBack}>Voltar para o carrinho</Button>
		</ContianerForm>
	);
}

export default FormDelivery;

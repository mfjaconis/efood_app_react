import { useSelector } from "react-redux";
import { usePostOrderCheckoutMutation } from "../../services/api";
import type { RootState } from "../../store";
import Button from "../Button";
import { ContianerOrder } from "./styles";

function Order() {
    const client = useSelector((state: RootState) => state.client);
    const payment = useSelector((state: RootState) => state.payment);


    const [checkoutOrder, { isLoading, isError, data }] = usePostOrderCheckoutMutation();

    const handleConclude = () => {
        checkoutOrder({
            products: [{
                id: 1,
                price: 20
            }],
            delivery: {
                receiver: client.name,
                address: {
                    description: client.address,
                    city: client.city,
                    zipCode: client.cep,
                    number: Number(client.number),
                    complement: client.complement || "",
                },
            },
            payment: {
                card: {
                    name: payment.card_name,
                    number: payment.card_number,
                    code: Number(payment.card_cvv),
                    expires: {
                        month: Number(payment.expiry_month),
                        year: Number(payment.expiry_year),
                    },
                },
            },
        })
        console.log(data)

    };

    console.log(data)

    if (isLoading) {
        return <p>Processando pedido...</p>;
    }

    if (isError) {
        return <p>Ocorreu um erro ao processar o pedido. Tente novamente.</p>;
    }

    const orderId = data?.orderId;

    return (

        <ContianerOrder>
            <>
                <h3>Pedido realizado - {data} </h3>
                <p>
                    Estamos felizes em informar que seu pedido já está em processo de
                    preparação e, em breve, será entregue no endereço fornecido. <br /><br />
                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
                    realizar cobranças extras.
                    <br /><br />
                    Lembre-se da importância de higienizar as mãos após o recebimento do
                    pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                    <br /><br />
                    Esperamos que desfrute de uma deliciosa e agradável experiência
                    gastronômica. Bom apetite!
                </p>
                <Button onClick={handleConclude}>Concluir</Button>
            </>


        </ContianerOrder>
    );
}

export default Order;

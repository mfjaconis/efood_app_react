import { useGetMenuOrderQuery } from "../../services/api";
import Button from "../Button";
import { ContianerOrder } from "./styles";

export type ProductOrder = {
    products: { id: number; price: number }[];
};

function Order() {
    const { data, error, isLoading } = useGetMenuOrderQuery();

    const handleConclude = () => {
        alert("Dados enviado com sucesso")
    };

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Ocorreu um erro ao carregar os dados do pedido.</p>;

    return (
        <ContianerOrder>
            {data ? (
                <>
                    <h3>Pedido realizado - {data.products[0].id}</h3>
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
            ) : (
                <p>Não foi possível recuperar o ID do pedido.</p>
            )}
        </ContianerOrder>
    );
}

export default Order;

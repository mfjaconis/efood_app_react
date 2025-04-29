import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store";
import { resetCart } from "../../store/reducer/cart";
import { resetClient } from "../../store/reducer/client";
import { resetPayment } from "../../store/reducer/payment";
import Button from "../Button";
import { ContianerOrder } from "./styles";

function Order() {
    const orderId = useSelector((state: RootState) => state.payment.orderId);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleConclude = () => {
        alert("Pedido realizado com sucesso!")
        navigate("/")
        dispatch(resetClient())
        dispatch(resetCart())
        dispatch(resetPayment())
    };


    return (

        <ContianerOrder>
            {orderId && (
                <><h3>Pedido realizado - {orderId}</h3>
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
                    </p><Button onClick={handleConclude}>Concluir</Button>
                </>
            )}


        </ContianerOrder>
    );
}

export default Order;

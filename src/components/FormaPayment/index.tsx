import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { updatePayment } from "../../store/reducer/payment";
import Button from "../Button";
import { ContainerInfo, ContentInfo, ContianerForm, FormStyle } from "./styles";

type FormPaymentProps = {
    onBack: () => void;
    onSubmit: () => void;
};

function FormPayment({ onBack, onSubmit }: FormPaymentProps) {
    const isValidCardNumber = (number: string) => /^\d{16}$/.test(number);
    const isValidCardName = (name: string) => /^[a-zA-Z]+ [a-zA-Z]+$/.test(name.trim());
    const isValidCVV = (cvv: string) => /^\d{3}$/.test(cvv);
    const isValidExpiryMonth = (month: string) => /^(0[1-9]|1[0-2])$/.test(month);
    const isValidExpiryYear = (year: string) => /^\d{4}$/.test(year);


    const cart = useSelector((state: RootState) => state.cart.items);

    const total = cart.reduce((acc, item) => acc + item.preco, 0);

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(price);

    const dispatch = useDispatch();
    const paymentData = useSelector((state: RootState) => state.payment);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        dispatch(
            updatePayment({
                ...paymentData,
                [name]: value,
            }),
        );
    };

    const handleContinue = () => {
        const { card_name, card_number, card_cvv, expiry_month, expiry_year } = paymentData;

        if (!isValidCardName(card_name)) {
            alert("Por favor, insira um nome completo (nome e sobrenome).");
            return;
        }

        if (!isValidCardNumber(card_number)) {
            alert("O número do cartão deve conter exatamente 16 dígitos e somente número.");
            return;
        }

        if (!isValidCVV(card_cvv)) {
            alert("O CVV deve conter exatamente 3 dígitos.");
            return;
        }

        if (!isValidExpiryMonth(expiry_month)) {
            alert("O mês de vencimento deve ser válido (01-12).");
            return;
        }

        if (!isValidExpiryYear(expiry_year)) {
            alert("O ano de vencimento deve conter 4 dígitos.");
            return;
        }

        onSubmit();
    };


    return (
        <ContianerForm>
            <h3>Pagamento - Valor a pagar {formatPrice(total)}</h3>
            <FormStyle>
                <label htmlFor="card_name">Nome no cartão</label>
                <input
                    type="text"
                    id="card_name"
                    name="card_name"
                    value={paymentData.card_name}
                    onChange={handleChange}
                />
                <ContainerInfo>
                    <ContentInfo>
                        <label htmlFor="card_number">Número do cartão</label>
                        <input
                            type="text"
                            id="card_number"
                            name="card_number"
                            value={paymentData.card_number}
                            onChange={handleChange}
                            maxLength={16}
                        />
                    </ContentInfo>
                    <ContentInfo>
                        <label htmlFor="card_cvv">CVV</label>
                        <input
                            type="text"
                            id="card_cvv"
                            name="card_cvv"
                            value={paymentData.card_cvv}
                            onChange={handleChange}
                            maxLength={3}
                        />
                    </ContentInfo>
                </ContainerInfo>
                <ContainerInfo>
                    <ContentInfo>
                        <label htmlFor="expiry_month">Mês de vencimento</label>
                        <input
                            type="text"
                            id="expiry_month"
                            name="expiry_month"
                            value={paymentData.expiry_month}
                            onChange={handleChange}
                            maxLength={2}
                        />
                    </ContentInfo>
                    <ContentInfo>
                        <label htmlFor="expiry_year">Ano de vencimento</label>
                        <input
                            type="text"
                            id="expiry_year"
                            name="expiry_year"
                            value={paymentData.expiry_year}
                            onChange={handleChange}
                            maxLength={4}
                        />
                    </ContentInfo>
                </ContainerInfo>
            </FormStyle>
            <Button onClick={handleContinue}>Finalizar pagamento</Button>
            <Button onClick={onBack} >Voltar para a edição de endereço</Button>
        </ContianerForm>
    );
}

export default FormPayment;

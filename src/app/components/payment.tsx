export const Payment = () => {
    return (
        <div className="w-full h-full justify-between items-center">
            <div className="w-full h-80 flex flex-col sm:flex-row justify-center items-center">

                <div className="w-2/6 h-72 flex flex-col justify-center items-center  text-center">
                        <div className="w-72 h-40 border-solid border-2 border-sky-500 rounded-lg"></div>
                        <div className="w-full h-32 flex flex-col justify-center items-center">
                            <h4>Escolha como pagar</h4>
                            <h5>Com o Mercado Pago, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x no boleto com o Mercado Crédito.</h5>
                        </div>
                </div>
                <div className="w-2/6 h-72 flex flex-col justify-center items-center text-center">
                    <div className="w-72 h-40 border-solid border-2 border-sky-500 rounded-lg"></div>
                    <div className="w-full h-32 flex flex-col justify-center items-center">
                        <h4>Frete grátis por ser Meli+</h4>
                        <h5>Além disso, você pode escolher um dia da semana para receber suas compras com "Seu dia de entregas".</h5>
                    </div>
                </div>
                <div className="w-2/6 h-72 flex flex-col justify-between items-center text-center">
                    <div className="w-72 h-40 border-solid border-2 border-sky-500 rounded-lg"></div>
                    <div className="w-full h-32 flex flex-col justify-center items-center">
                        <h4>Segurança, do início ao fim</h4>
                        <h5>Você não gostou do que comprou? Devolva! No Mercado Livre não há nada que você não possa fazer.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
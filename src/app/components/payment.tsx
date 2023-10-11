import cartao from "@/app/assets/icos/cartao-de-credito.svg";
import presente from "@/app/assets/icos/cartao-presente.svg";
import seguranca from "@/app/assets/icos/verificacao-de-escudo.svg";

export const Payment = () => {
    return (
        <div className="w-full h-full justify-between items-center">
            <div className="w-full h-96 flex flex-col sm:flex-row justify-center items-center mt-4">

                <div className="w-2/6 h-72 flex flex-col justify-center items-center  text-center">
                        <div className="w-72 h-40 flex justify-center items-center bg-white rounded-lg">
                            <img className="w-32 h-32" src={cartao.src} alt="" />
                        </div>
                        <div className="w-full h-32 flex flex-col justify-center items-center">
                            <h4>Escolha como pagar</h4>
                            <h5>Com o eFeelps, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x no boleto com o eFeelps Crédito.</h5>
                        </div>
                </div>
                <div className="w-2/6 h-72 flex flex-col justify-center items-center text-center">
                    <div className="w-72 h-40 flex justify-center items-center bg-white rounded-lg">
                        <img className="w-32 h-32" src={presente.src} alt="" />
                    </div>
                    <div className="w-full h-32 flex flex-col justify-center items-center">
                        <h4>Frete grátis por ser eFeeps+</h4>
                        <h5>Além disso, você pode escolher um dia da semana para receber suas compras com "Seu dia de entregas".</h5>
                    </div>
                </div>
                <div className="w-2/6 h-72 flex flex-col justify-between items-center text-center">
                    <div className="w-72 h-40  flex justify-center items-center bg-white rounded-lg">
                        <img className="w-32 h-32" src={seguranca.src} alt="" />
                    </div>
                    <div className="w-full h-32 flex flex-col justify-center items-center">
                        <h4>Segurança, do início ao fim</h4>
                        <h5>Você não gostou do que comprou? Devolva! No eFeelps não há nada que você não possa fazer.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
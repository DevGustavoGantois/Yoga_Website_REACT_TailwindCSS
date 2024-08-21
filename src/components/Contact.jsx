

export function Contact() {
    return (
        <section className="section-sm lg:pt-[250px]">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]">
                    <div className="flex-1 flex flex-col justify-center pl-8">
                        <h1 data-aos="fade-left" className="h2 mb-3 lg:mb-7">Entre em contato conosco para o curso de Yoga.</h1>
                        <p data-aos="fade-right" data-aos-delay="200" className="mb-7 lg:mb-0">Entre em contato com use para qualquer tipo de ajuda. Estamos aqui para lhe dar o melhor e também para ajudá-lo a encontrar seu curso de yoga.</p>
                    </div>
                    <form data-aos="flip-up" data-aos-delay="200" className="bg-white flex-1 shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-w-[600px] lg:-mt-20" action="">
                        <input className="form-control" placeholder="Primeiro nome" name="user_firstname" type="text" />
                        <input className="form-control" placeholder="Ultimo nome" name="user_lastname" type="text" />
                        <input className="form-control" placeholder="Email" name="user_email" type="text" />
                        <textarea className="form-control py-5 h-[165px] resize-none" placeholder="Mensagem" name="user_message">Deixe sua mensagem</textarea>
                        <button className="btbn btn-lg btn-orange" type="submit">Enviar mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
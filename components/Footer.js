function Footer() {
    const footer = `
        <footer id="footer">  
            <div class="container">
                <section class="socialmedia">
                  
                    <div class="socialLinks">
                        <h4>
                            Nossas redes sociais
                        </h4>
                        <a href="#">
                            <img src="./assets/img/linkLogo.svg">
                        </a>
                        <a href="#">
                            <img src="./assets/img/faLogo.svg">
                        </a>
                        <a href="#">
                            <img src="./assets/img/instaLogo.svg">
                        </a>
                    </div>
                    <p>
                        <strong>
                            Precisa entrar em contato com a gente?
                        </strong>
                        <br>
                        Manda um e-mail para o
                        <a href=" mailto:contato@b2bstack.com.br">
                            contato@b2bstack.com.br
                        </a>
                    </p>
                    <address>
                        Rua Berta, 300 Vila Mariana
                        <br>
                        São Paulo (SP)
                    </address>
                </section>
                <section>
                    <h4>
                        Categorias
                    </h4>
                    <ul>
                        <li>
                            <a href="#">
                                Vendas
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Marketing
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Atendimento e Help Desk
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Recursos Humanos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Colaboração e Produtividade
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ERP e Gestão Financeira
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Comércio Eletrônico
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Ver todas as categorias
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h4>
                        Sobre a B2B
                    </h4>
                    <ul>
                        <li>
                            <a href="#">
                                Sobre a B2B Stack
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Escreva uma avaliação
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Cadastre uma solução
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Termos de uso
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Trabalhe conosco
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <h4>
                        Vender
                    </h4>
                    <ul>
                        <li>
                            <a href="#">
                                Saiba
                                mais
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Entrar
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                B2B Awards 2021
                            </a>
                        </li>
                        <li>
                            <a href="https://finance.b2bstack.com.br">
                                Finance
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <section id="rights">
                @B2B Stack, Inc. 2022. We love our users!
            </section>
    </footer>
    `

    document.getElementById('footer').innerHTML = footer
}

Footer()
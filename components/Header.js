function Header() {
    const header = `
        <Header id="header">
         <div class="padding">
            <div class="container row">
                <div id="logo">
                    <a href="#">
                        <img src="./assets/img/principalLogo.svg" alt="B2B Stack">
                    </a>
                </div>
                <nav id="menu">
                    <ul class="row">
                        <li><a href="#">Categorias<span class="arrow"><span></a></li>
                        <li><a href="#">Vender<span class="arrow"></span></a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Conteúdo</a></li>
                    </ul>
                </nav>
                
                <div id="search">
                    <form action="#">
                        <input type="text" placeholder="Buscar software por categoria">
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </header>
    `
    document.getElementById('topSite').innerHTML = header;
    
}

Header()
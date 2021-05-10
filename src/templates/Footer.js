const Footer = () => {
    const view = `
    <div class="footer-wrapper">
        <section class="footer__logo">
            <h2 class="nav__title">SECTOR</h2>
            <p>Copyright 2020, Sector Nine</p>
        </section>
        <section class="footer__about-us">
            <div>
                <p>SERVICIO AL CLIENTE</p>
                <ul>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li><a href="#">Distribuidores</a></li>
                    <li><a href="#">Politica de Privacidad</a></li>
                    <li><a href="#">Devoluciones</a></li>
                </ul>
            </div>
            <div>
                <p>ACERCA DE</p>
                <ul>
                    <li><a href="#">La Bola 9</a></li>
                    <li><a href="#">Completos cerificados</a></li>
                    <li><a href="#">Garantia</a></li>
                </ul>
            </div>
        </section>
    </div>
    `;
    return view;
};

export default Footer;
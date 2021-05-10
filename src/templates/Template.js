import imagen1 from '@images/01.jpg';
import imagen2 from '@images/02.jpg';
import imagen3 from '@images/03.jpg';

const Template = async () => {
    const view = `
        <section class="main-container">
            <header class="header">
                <nav class="nav">
                    <div class="nav__title">SECTOR</div>
                    <ul class="nav-item__container">
                        <li class="nav__item"><a href="#">Tablas</a></li>
                        <li class="nav__item"><a href="#">Llantas</a></li>
                        <li class="nav__item"><a href="#">Componentes</a></li>
                    </ul>
                </nav>
            </header>
            <div class="main-info">
                <div class="main__social-media">
                    <ul class="social-media__wrapper">
                        <li class="social-media__item"><a href=""><span>Instagram</span></a></li>
                        <li class="social-media__item"><a href=""><span>Twitter</span></a></li>
                    </ul>
                </div>
                <div class="main__title">
                    <h1>Si estás buscando escribir tu nombre en la calle, entonces quieres una tabla de Sector Nine</h1>
                </div>
                <div class="main__index">
                    <ul class="index__wrapper">
                        <li class="index__item"><a href="#">Inicio</a></li>
                        <li class="index__item"><a href="#">01</a></li>
                        <li class="index__item"><a href="#">02</a></li>
                        <li class="index__item"><a href="#">03</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="features-container">
            <div class="feature__item-left">
                <div class="item__info">
                    <div class="info__title">
                        <p>01</p>
                        <p>CRUISER</p>
                    </div>
                    <div class="info__description">
                        <p>Si bien la mayoría de las tablas de nuestra línea son capaces de navegar, una tabla designada como crucero suele ser un poco más corta que una tabla corta estándar con una punta más corta, una forma más direccional y ruedas suaves. La mayoría de estas tablas se construyen a partir de moldes regulares de tablas cortas y son capaces de patinar en una variedad de terrenos, incluidos parques, pero también pueden cruzar un paseo marítimo.</p>
                        <div>Leer más <span> arrow</span></div>
                    </div>
                </div>
                <div class="item__picture-left">
                    <img src="${imagen1}" alt="">
                </div>
            </div>
            <div class="feature__item-right">
                <div class="item__picture-right">
                    <img src="${imagen3}" alt="">
                </div>
                <div class="item__info">
                    <div class="info__title">
                        <p>02</p>
                        <p>CARVING</p>
                    </div>
                    <div class="info__description">
                        <p>Si le gustan las tablas que mantienen bien su línea en los giros y no se deslizan mucho, esté atento a esta designación. Eso no significa que no se deslizarán en absoluto, sino que, por lo general, están configurados con ruedas con bordes que se agarran mejor mientras mantienen la velocidad. Todos nuestros modelos completos con ejes Gullwing Sidewinder II se consideran tablas de Carving, pero este estilo de conducción tampoco es exclusivo de ellos.</p>
                        <div>Leer más <span> arrow</span></div>
                    </div>
                </div>
            </div>
            <div class="feature__item-left">
                <div class="item__info">
                    <div class="info__title">
                        <p>03</p>
                        <p>DOWNHILL</p>
                    </div>
                    <div class="info__description">
                        <p>Las tablas con la designación Downhill están diseñadas para bajar por grandes colinas o pasos de montaña. Esto no significa que tenga una licencia automática para cargar por estas colinas, sino que la tabla puede manejarlo si tiene la capacidad. Las tablas de descenso suelen tener moldes más complejos, construcciones únicas y hardware y componentes de primera calidad. Siempre patine dentro de sus propias capacidades y use un casco.</p>
                        <div>Leer más <span> arrow</span></div>
                    </div>
                </div>
                <div class="item__picture-left">
                    <img src="${imagen2}" alt="">
                </div>
            </div>
        </section>
    `;
    return view;
};

export default Template;
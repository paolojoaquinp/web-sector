import Template from '@templates/Template';
import Footer from '@templates/Footer';
import '@styles/main.css';
// import fondo from '@images/mg.jpg';

async function App() {
    const main = null || document.querySelector('.main');
    main.innerHTML = await Template();
    const footer = null || document.querySelector('.footer');
    footer.innerHTML = await Footer();
}
App();
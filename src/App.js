'use strict';

const App = () => {
  const App = document.querySelector('#app');
  App.innerHTML = `
        <header id="home" class="header scroll-snap js-slider">
            <h1 class="header-title glitch-text" data-text="Joël Lesenne">Joël Lesenne</h1>
            <p>Creative Web Developer</p>
            <nav id="js-nav-sticky" class="nav">
                <a class="nav-tab js-nav-tab nav-tab-active" href="#home">Home</a>
                <a class="nav-tab js-nav-tab" href="#project">Project</a>
                <a class="nav-tab js-nav-tab" href="#lab">Lab</a>
                <a class="nav-tab js-nav-tab" href="#blog">Blog</a>
                <a class="nav-tab js-nav-tab" href="#photos">Photos</a>
                <a class="nav-tab js-nav-tab" href="#about">About</a>
            </nav>
        </header>
        <article>
            <section id="project" class="slider scroll-snap js-slider">
                <h2 class="slider-title glitch-text" data-text="Projects">Projects</h2>
                <p>A concentrate of projects carried out</p>
                <form action="https://github.com/joellesenne" method="get" target="_blank">
                    <button class="slider-link blob-animation" type="submit">see more my projects</button>
                </form>
            </section>
            <section id="lab" class="slider scroll-snap js-slider">
                <h2 class="slider-title glitch-text" data-text="Lab">Lab</h2>
                <p>Various coding experiments and dems</p>
                <form action="https://lab.joellesenne.dev" method="get" target="_blank">
                    <button class="slider-link blob-animation" type="submit">see more my lab</button>
                </form>
            </section>
            <section id="blog" class="slider scroll-snap js-slider">
                <h2 class="slider-title glitch-text" data-text="Blog"">Blog</h2>
                <p>A concentrate of reflection, tutorials and watches</p>
                <form action="https://blog.joellesenne.dev" method="get" target="_blank">
                    <button class="slider-link blob-animation" type="submit">see more on blog</button>
                </form>
            </section>
            <section id="photos" class="slider scroll-snap js-slider">
                <h2 class="slider-title glitch-text" data-text="Photos">Photos</h2>
                <p>A collection of photographs</p>
                <form action="https://photos.joellesenne.dev" method="get" target="_blank">
                    <button class="slider-link blob-animation" type="submit">see more my photos</button>
                </form>
            </section>
            <section id="about" class="slider scroll-snap js-slider">
                <h2 class="slider-title glitch-text" data-text="About">About</h2>
                <p>My passion lies in creating animations and small websites</p>
                <form action="https://blog.joellesenne.dev/about" method="get" target="_blank">
                    <button class="slider-link blob-animation" type="submit">More about me</button>
                </form>
                <form action="https://cv.joellesenne.dev" method="get" target="_blank">
                    <button class="slider-link" type="submit">CV Resume</button>
                </form>
            </section>
        </article>
        <footer class="footer scroll-snap">
            <h3>© 2019-${new Date().getFullYear()} - All rights reserved <br> <a href="/public">Joël Lesenne</a></h3>
            <button id="toggleDarkMode" type="button" class="slider-link">light mode</button>
        </footer>
        <a id="js-top" class="scroll-top hide" href="#home" title="Top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z"/></svg>
        </a>
        <canvas class="page-background"></canvas>
    `;
};

export default App;

import './style.css'
import Particle from "./particles.js"
import NavigationPage from "./NavigationPage.js";




window.onload = function () {
    const App = document.querySelector('#app')
    App.innerHTML = `
        <header class="header">
          <h1 class="header-title">Joël Lesenne</h1>
          <p>Creative Web Developer</p>
          <nav class="nav">
                <a class="nav-tab" href="#project">Project</a>
                <a class="nav-tab" href="#lab">Lab</a>
                <a class="nav-tab" href="#blog">Blog</a>
                <a class="nav-tab" href="#photos">Photos</a>
                <a class="nav-tab" href="#about">About</a>
                <a class="nav-tab" href="#cv">CV</a>
                <span class="nav-tab-slider"></span>
            </nav>
        </header>
        <article>
          <section class="slider" id="project">
            <h2 class="slider-title">Project</h2>
            <p>A concentrate of projects carried out</p>
            <form action="https://github.com/joellesenne" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
          <section class="slider" id="lab">
            <h2 class="slider-title">Lab</h2>
            <p>Various coding experiments and dems</p>
            <form action="https://lab.joellesenne.dev" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
          <section class="slider" id="blog">
            <h2 class="slider-title">Blog</h2>
            <p>A concentrate of reflection, tutorials and watches</p>
            <form action="https://blog.joellesenne.dev" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
          <section class="slider" id="photos">
            <h2 class="slider-title">Photos</h2>
            <p>A collection of photographs</p>
            <form action="https://photos.joellesenne.dev" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
          <section class="slider" id="about">
            <h2 class="slider-title">About</h2>
            <p>My passion lies in creating animations and small websites</p>
            <form action="https://blog.joellesenne.dev/about" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
          <section class="slider" id="cv">
            <h2 class="slider-title">CV</h2>
            <p>Front-end developer with more than 3 year of experience</p>
            <form action="https://cv.joellesenne.dev" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
        </main>
        <canvas class="background"></canvas>
    `;
    Particle();
    new NavigationPage();
};






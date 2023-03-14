import './style.css'
import Particle from "./particles.js"
import StickySliderNav from "./StickySliderNav.js";

"use strict";

window.onload = function () {
    const App = document.querySelector('#app')
    App.innerHTML = `
        <header class="header js-slider" id="home">
          <h1 class="header-title">Joël Lesenne</h1>
          <p>Creative Web Developer</p>
          <nav id="js-nav-sticky" class="nav">
                <a class="nav-tab js-nav-tab nav-tab-slider" href="#home">Home</a>
                <a class="nav-tab js-nav-tab" href="#project">Project</a>
                <a class="nav-tab js-nav-tab" href="#lab">Lab</a>
                <a class="nav-tab js-nav-tab" href="#blog">Blog</a>
                <a class="nav-tab js-nav-tab" href="#photos">Photos</a>
                <a class="nav-tab js-nav-tab" href="#about">About</a>
            </nav>
        </header>
        <article>
          <section class="slider js-slider" id="project">
            <h2 class="slider-title">Project</h2>
            <p>A concentrate of projects carried out</p>
            <form action="https://github.com/joellesenne" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
          <section class="slider js-slider" id="lab">
            <h2 class="slider-title">Lab</h2>
            <p>Various coding experiments and dems</p>
            <form action="https://lab.joellesenne.dev" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
          <section class="slider js-slider" id="blog">
            <h2 class="slider-title">Blog</h2>
            <p>A concentrate of reflection, tutorials and watches</p>
            <form action="https://blog.joellesenne.dev" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
          <section class="slider js-slider" id="photos">
            <h2 class="slider-title">Photos</h2>
            <p>A collection of photographs</p>
            <form action="https://photos.joellesenne.dev" method="get" target="_blank">
                <button class="slider-link" type="submit">Click me</button>
            </form>
          </section>
          <section class="slider js-slider" id="about">
            <h2 class="slider-title">About</h2>
            <p>My passion lies in creating animations and small websites</p>
            <form action="https://blog.joellesenne.dev/about" method="get" target="_blank">
                <button class="slider-link" type="submit">About</button>
            </form>
            <form action="https://cv.joellesenne.dev" method="get" target="_blank">
                <button class="slider-link" type="submit">CV Resume</button>
            </form>
          </section>
          <footer class="footer"><h3>© 2019-${new Date().getFullYear()} - All rights reserved <br> <a href="/">Joël Lesenne</a>
</h3></footer>
        </main>
        <canvas class="background"></canvas>
    `;
    Particle();
    StickySliderNav();
};






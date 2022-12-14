import { createElement } from "react";
import AboutMe from "../Sections/AboutMe/AboutMe";
import Education from "../Sections/Education/Education";
import Experience from "../Sections/Experience/Experience";
import Skills from "../Sections/Skills/Skills";
import './main.css';

type sectionPageType = {
    id: string;
    component: () => JSX.Element;
}[]

const sectionsPage: sectionPageType = [{ id: "aboutme", component: AboutMe }, { id: "skills", component: Skills }, { id: "experience", component: Experience }, { id: "education", component: Education }];

const mybutton = document.getElementById("myBtn");

const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const scrollFunction = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        if (mybutton) {
            mybutton.style.display = "block"
        }
    } else {
        if (mybutton) {
            mybutton.style.display = "none";
        }
    }
}

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    const heigth = 100;
    if (nav) {
        nav.classList.toggle("scrolling", window.scrollY >= heigth);
        if (window.scrollY >= heigth) {
            nav.style.backgroundColor = "black";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    }
});

window.onscroll = function () {
    scrollFunction();
};

const Main = () => {
    return (
        <main>{sectionsPage.map(({ id, component }) => <section id={id}>{createElement(component)}</section>)}
            <span>
                <button onClick={topFunction} id="myBtn" title="Go to top"></button>
            </span>
        </main>
    )
}

export default Main


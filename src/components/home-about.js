import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const About = () => {
    return (
        <div>
            <h2>About Me</h2>
            <div>
                <StaticImage
                    alt="Portrait Justus Bogner"
                    src="../images/jb-portrait.jpg"
                    className="portrait"
                    formats={["auto", "webp", "avif"]}
                />
                <p>
                    Hi! I'm Justus, a researcher in{" "}
                    <i>empirical software engineering</i>. I also teach software
                    engineering courses at the university. Before and during my
                    PhD, I was employed for more than 9 years as a software
                    engineer in industry, building mostly web- and service-based
                    enterprise applications.
                </p>
                <p>
                    Currently, I'm an Assistant Professor in Software
                    Engineering at the Vrije Universiteit Amsterdam (
                    <a href="https://vu.nl/en">the VU</a>). My position is
                    located in Prof. Patricia Lago's S2 group (
                    <a href="https://s2group.cs.vu.nl">
                        Software and Sustainability
                    </a>
                    ). I received my PhD in Computer Science (Dr. rer. nat.)
                    from the University of Stuttgart, Germany. My advisors were
                    Prof. Alfred Zimmermann and Prof. Stefan Wagner. After that,
                    I was a postdoc at the Institute of Software Engineering at
                    the University of Stuttgart for 3 years. Within Prof.
                    Wagner's{" "}
                    <a href="https://www.iste.uni-stuttgart.de/ese">
                        Empirical Software Engineering Group
                    </a>
                    , I led the division "Software Engineering for AI- &
                    Microservice-Based Systems" (SE4AI&MS). I regularly review
                    for journals, conferences, and workshops, such as IEEE TSE,
                    EMSE, ACM TOSEM, IEEE Software, ECSA, CAIN, or ESEM. Lastly,
                    I am also a co-organizer of the{" "}
                    <a href="https://sa-ml.github.io/saml2025">
                        SAML workshop
                    </a>
                    , which combines software architecture and machine learning.
                </p>
            </div>
        </div>
    );
};

export default About;

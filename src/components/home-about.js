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
                    <strong>empirical software engineering</strong>. I also
                    teach software engineering courses at the university and as
                    a trainer for companies. Before and during my PhD, I was employed for more
                    than 9 years as a software engineer in the industry,
                    building mostly web- and service-based enterprise
                    applications.
                </p>
                <p>
                    In May 2020, I received my PhD in Computer Science (Dr. rer.
                    nat.) from the University of Stuttgart, Germany. My advisors
                    were Prof. Dr. Alfred Zimmermann and Prof. Dr. Stefan
                    Wagner, with Prof. Dr. Cesare Pautasso as external reviewer.
                    Currently, I'm a postdoc at the Institute of Software
                    Engineering at the University of Stuttgart. Within Prof.
                    Wagner's{" "}
                    <a href="https://www.iste.uni-stuttgart.de/ese">
                        Empirical Software Engineering Group
                    </a>
                    , I lead the division "Software Engineering for AI- &
                    Microservice-Based Systems" (SE4AI&MS). I regularly review
                    for journals and conferences, such as IEEE TSE, PeerJ CS,
                    Wiley SPE, ECSA, Euromicro SEAA, or XP.
                </p>
            </div>
        </div>
    );
};

export default About;

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Research = () => {
    return (
        <div>
            <h2>
                <FaSearch></FaSearch> Research
            </h2>
            <div>
                <p>
                    To study and improve software engineering, I apply both
                    quantitative and qualitative{" "}
                    <strong>empirical methods</strong>, such as controlled
                    experiments, systematic literature reviews, surveys,
                    interviews, repository mining, or case studies. Based on
                    these results, I then create and evaluate tools or methods
                    to support software professionals. While I conducted studies
                    in other areas, my two main SE knowledge areas are{" "}
                    <strong>software architecture</strong> and{" "}
                    <strong>software quality</strong>, especially
                    maintainability, evolvability, and technical debt. Moreover,
                    I mainly study two types of systems described below. For
                    more details, please refer to my{" "}
                    <Link to="/publications">publications</Link>.
                </p>

                <div>
                    <h3>Microservice-based Systems</h3>
                    <figure className="research-images">
                        <StaticImage
                            alt="Microservices"
                            src="../images/microservices.png"
                            formats={["auto", "webp", "avif"]}
                        />
                        <figcaption>
                            Microservices, based on <br />
                            <a href="https://www.martinfowler.com/articles/microservices.html">
                                Martin Fowler's article
                            </a>
                            .
                        </figcaption>
                    </figure>
                    <p>
                        In my{" "}
                        <a href="http://dx.doi.org/10.18419/opus-10950">
                            PhD thesis
                        </a>
                        , I studied the evolvability assurance of the
                        architectural style <strong>microservices</strong>, and
                        approached the topic via metrics, scenario-based
                        evaluation, and (anti-)patterns. While I still continue
                        parts of this line of research, I'm also interested in
                        microservices migration, the design of RESTful APIs, and
                        web-based applications in general.
                    </p>
                </div>

                <div>
                    <h3>AI-based Systems</h3>
                    <figure className="research-images">
                        <StaticImage
                            alt="AI-based systems"
                            src="../images/ai-based-systems.jpg"
                            formats={["auto", "webp", "avif"]}
                        />
                        <figcaption>
                            Artificial Intelligence,
                            <br />
                            photo by{" "}
                            <a href="https://www.pexels.com/photo/love-art-earth-summer-8849282/">
                                Tara Winstead
                            </a>
                            .
                        </figcaption>
                    </figure>
                    <p>
                        After my PhD, I also broadened my scope with an
                        additional research area: software engineering for
                        AI-based systems (SE4AI). Here, I am mostly interested
                        in the development process, architecture, and quality
                        assurance of systems with AI components, e.g., systems
                        which include one or more machine learning models.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Research;

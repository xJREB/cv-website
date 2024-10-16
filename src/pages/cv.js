import { Link } from "gatsby";
import React from "react";
import { MdSchool, MdWork } from "react-icons/md";
import Layout from "../components/layout";

const CV = () => {
    return (
        <Layout pageTitle="CV">
            <div className="page-wrapper">
                <div className="home-inner">
                    <section>
                        <h1>Curriculum Vitae</h1>
                        <p>
                            Justus Bogner holds a B.Sc. in Applied Computer
                            Science from Baden-Württemberg Cooperative State
                            University Stuttgart, Germany, and a M.Sc. in
                            Services Computing from University of Applied
                            Sciences Reutlingen, Germany. He was a PhD student
                            in the cooperative doctoral program "Services
                            Computing", a joint initiative between the
                            University of Stuttgart and the University of
                            Applied Sciences Reutlingen. The program was
                            scholarship-funded by the Ministry of Science,
                            Research, and Arts of the state of
                            Baden-Wuerttemberg. He did his PhD under the
                            supervision of{" "}
                            <a href="https://www.hhz.de/en/research/research-groups/digital-enterprise-architecture/#alfred-zimmermann">
                                Prof. Alfred Zimmermann
                            </a>{" "}
                            and{" "}
                            <a href="https://www.iste.uni-stuttgart.de/institute/team/Wagner-00017/">
                                Prof. Stefan Wagner
                            </a>
                            . During and after his studies as well as throughout
                            his PhD, he worked as a software engineer at Hewlett
                            Packard and later at DXC Technology for more than
                            nine years. After his PhD, he was a postdoctoral
                            research scientist in Prof. Wagner's Empirical
                            Software Engineering Group for 3 years, where he led
                            the division "Software Engineering for AI- and
                            Microservice-Based Systems" (SE4AI&MS). Currently,
                            he is an Assistant Professor (tenure track) in
                            Software Engineering at the{" "}
                            <a href="https://vu.nl/en">
                                Vrije Universiteit Amsterdam
                            </a>
                            , Netherlands. The position is part of Prof.
                            Patricia Lago's S2 group (
                            <a href="https://s2group.cs.vu.nl/">
                                Software and Sustainability
                            </a>
                            ). His main research interests are empirical
                            software engineering, software architecture,
                            internal software quality (maintainability,
                            evolvability, sustainability), AI-based and
                            ML-enabled systems, and service- and
                            microservice-based systems.
                        </p>

                        <h3>
                            <MdSchool></MdSchool> Education
                        </h3>

                        <p>
                            <strong>
                                Ph.D. in Computer Science (Dr. rer. nat.)
                            </strong>
                            <br />
                            From 2016-01 to 2020-05 at the{" "}
                            <a href="https://www.hhz.de/en/the-hhz/">
                                Herman Hollerith Center
                            </a>{" "}
                            and the{" "}
                            <a href="https://www.uni-stuttgart.de/en/">
                                University of Stuttgart
                            </a>
                            , Germany
                            <br />
                            Dissertation title:{" "}
                            <span style={{ fontStyle: "italic" }}>
                                "On the Evolvability Assurance of Microservices:
                                Metrics, Scenarios, and Patterns"
                            </span>
                            <br />
                            Advisors: Prof. Dr. Alfred Zimmermann, Prof. Dr.
                            Stefan Wagner
                            <br />
                            External reviewer: Prof. Dr. Cesare Pautasso
                            <br />
                            Grade:{" "}
                            <span style={{ fontStyle: "italic" }}>
                                summa cum laude
                            </span>
                        </p>

                        <p>
                            <strong>M.Sc. in Services Computing</strong>
                            <br />
                            From 2013-10 to 2015-09 at the University of Applied
                            Sciences Reutlingen,{" "}
                            <a href="https://www.hhz.de/en/the-hhz/">
                                Herman Hollerith Center
                            </a>
                            , Germany
                            <br />
                            Thesis title:{" "}
                            <span style={{ fontStyle: "italic" }}>
                                "Identifying Relevant Software Architecture
                                Patterns for IT Service Monitoring and Reporting
                                Solutions"
                            </span>
                            <br />
                            Advisor: Prof. Dr. Martin Schmollinger
                            <br />
                            Grade average:{" "}
                            <span style={{ fontStyle: "italic" }}>
                                1.3
                            </span>{" "}
                            (between 1.0 and 4.0, lower is better)
                        </p>

                        <p>
                            <strong>B.Sc. in Applied Computer Science</strong>
                            <br />
                            From 2010-10 to 2013-09 at the{" "}
                            <a href="https://www.dhbw-stuttgart.de/en/">
                                Baden-Wuerttemberg Cooperative State University
                                Stuttgart
                            </a>
                            , Germany
                            <br />
                            Thesis title:{" "}
                            <span style={{ fontStyle: "italic" }}>
                                "Development of a Java-Based EventManager for
                                Platform-Independent and Message-Based
                                Communication in Large Service-Oriented
                                Architectures"
                            </span>
                            <br />
                            Advisors: Dr. Michael Steffens, Dr. Andreas
                            Wickenhäuser
                            <br />
                            Grade average:{" "}
                            <span style={{ fontStyle: "italic" }}>
                                1.6
                            </span>{" "}
                            (between 1.0 and 4.0, lower is better)
                        </p>

                        <h3>
                            <MdWork></MdWork> Professional Experience
                        </h3>

                        <p>
                            <strong>Assistant Professor (tenure track)</strong>
                            <br />
                            From 2023-08 to today at the{" "}
                            <a href="https://vu.nl/en">
                                Vrije Universiteit Amsterdam
                            </a>
                            ,{" "}
                            <a href="https://s2group.cs.vu.nl/">
                                Software and Sustainability Research Group
                            </a>
                            , Amsterdam, Netherlands
                            <br />
                            <Link to="/#research">Research</Link> and{" "}
                            <Link to="/teaching/">teaching</Link> in the broader
                            area of software engineering
                        </p>

                        <p>
                            <strong>Postdoctoral Research Scientist</strong>
                            <br />
                            From 2020-02 to 2023-07 at the University of
                            Stuttgart, Institute of Software Engineering,
                            Stuttgart, Germany
                            <br />
                            <Link to="/#research">Research</Link> and{" "}
                            <Link to="/teaching/">teaching</Link> in the broader
                            area of software engineering
                        </p>

                        <p>
                            <strong>Software Engineer</strong>
                            <br />
                            From 2017-04 to 2020-01 at DXC Technology,
                            Böblingen, Germany
                            <br />
                            Software engineer developing IT service monitoring
                            and reporting solutions, web- and service-based
                            application development, software architecture
                            responsibilities, subject-matter expert for customer
                            presentations, project management
                        </p>

                        <p>
                            <strong>Software Engineer</strong>
                            <br />
                            From 2015-10 to 2017-03 at Hewlett Packard
                            Enterprise, Böblingen, Germany
                            <br />
                            Software engineer developing IT service monitoring
                            and reporting solutions, web- and service-based
                            application development, software architecture
                            responsibilities, subject-matter expert for customer
                            presentations, project management
                        </p>

                        <p>
                            <strong>Software Engineer</strong>
                            <br />
                            From 2013-10 to 2015-09 at Hewlett Packard,
                            Böblingen, Germany
                            <br />
                            Software engineer developing IT service monitoring
                            and reporting solutions, web- and service-based
                            application development, software architecture
                            responsibilities
                        </p>

                        <p>
                            <strong>Junior Software Engineer</strong>
                            <br />
                            From 2010-10 to 2013-09 at Hewlett Packard, Munich,
                            Germany
                            <br />
                            Student intern switching between various divisions,
                            with tasks in the areas of software and web
                            engineering, software architecture, databases,
                            project management, data visualization, research
                            visit in the HP Labs in Bristol, UK (3 months)
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default CV;

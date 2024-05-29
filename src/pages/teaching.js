import React from "react";
import Layout from "../components/layout";

const Teaching = () => {
    return (
        <Layout pageTitle="Teaching">
            <div className="page-wrapper">
                <div className="home-inner">
                    <section>
                        <h1>Teaching</h1>
                        <p>
                            I have taught several lectures, tutorials, or
                            seminars in the general area of software
                            engineering, both at the B.Sc. and M.Sc. level and
                            both in German and English. For two lectures (PE II
                            and SE4AI), I created the lecture content from
                            scratch. I attended several didactic seminars,
                            completed the first module of the teaching
                            certification for higher education from the state of
                            Baden-Württemberg and integrated concepts like
                            constructive alignment or Bloom's taxonomy of
                            learning objectives into my teaching. Furthermore, I
                            have supervised over 60 student projects, mostly
                            B.Sc. and M.Sc. theses.
                        </p>

                        <strong>Vrije Universiteit Amsterdam, NL:</strong>
                        <ul>
                            <li>
                                2024 fall: Service-Oriented Design, M.Sc.
                                lecture
                            </li>
                            <li>2024 spring: Software Design, B.Sc. lecture</li>
                            <li>
                                2023 fall: Service-Oriented Design, M.Sc.
                                tutorial + 1 lecture slot
                            </li>
                        </ul>

                        <strong>University of Stuttgart, DE:</strong>
                        <ul>
                            <li>
                                2023 summer: Software Engineering for AI-based
                                Systems, M.Sc. lecture
                            </li>
                            <li>
                                2022 winter: Program Development II (PE II),
                                B.Sc. lecture
                            </li>
                            <li>
                                2022 summer: Software Engineering for AI-based
                                Systems, M.Sc. lecture
                            </li>
                            <li>
                                2021 winter: Program Development II (PE II),
                                B.Sc. lecture
                            </li>
                            <li>
                                2021 summer: Software Engineering for AI-based
                                Systems, M.Sc. seminar
                            </li>
                            <li>
                                2020 winter: Program Development II (PE II),
                                B.Sc. lecture
                            </li>
                            <li>
                                2020 winter: Software Project (SoPra), B.Sc.
                                development project
                            </li>
                            <li>
                                2020 summer: Introduction to Software
                                Engineering (EST), B.Sc. tutorial
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Teaching;

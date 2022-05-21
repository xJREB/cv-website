import * as React from "react";
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
                            scratch. I participated in several didactics
                            seminars for higher education from the state of
                            Baden-Württemberg and integrated concepts like
                            constructive alignment into my teaching.
                            Furthermore, I have supervised over 40 student
                            projects, mostly B.Sc. and M.Sc. theses.
                        </p>

                        <ul>
                            <li>
                                2022 SS: Software Engineering for AI-based
                                Systems, M.Sc. lecture
                            </li>
                            <li>
                                2021 WS: Programmentwicklung II (PE II), B.Sc.
                                lecture
                            </li>
                            <li>
                                2021 SS: Software Engineering for AI-based
                                Systems, M.Sc. seminar
                            </li>
                            <li>
                                2020 WS: Programmentwicklung II (PE II), B.Sc.
                                lecture
                            </li>
                            <li>
                                2020 WS: Softwarepraktikum (SoPra), B.Sc.
                                development project
                            </li>
                            <li>
                                2020 SS: Einführung in die Softwaretechnik
                                (EST), B.Sc. tutorial
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Teaching;

import React from "react";
import { FaAward } from "react-icons/fa";

const Awards = () => {
    return (
        <div>
            <h2>
                <FaAward></FaAward> Awards
            </h2>
            <div>
                <p>My research has won the following awards:</p>

                <p>
                    <strong>infos Dissertation Award</strong>
                    <br />
                    From the Informatik Forum Stuttgart, 2021, for my PhD
                    thesis:
                    <br />
                    <a href="http://dx.doi.org/10.18419/opus-10950">
                        "On the Evolvability Assurance of Microservices:
                        Metrics, Scenarios, and Patterns"
                    </a>
                </p>

                <p>
                    <strong>Best Presentation Award</strong>
                    <br />
                    At the International Conference on Technical Debt
                    (TechDebt), 2021, for the paper:
                    <br />
                    <a href="https://doi.org/10.1109/TechDebt52882.2021.00016">
                        "Characterizing Technical Debt and Antipatterns in
                        AI-Based Systems: A Systematic Mapping Study"
                    </a>
                </p>

                <p>
                    <strong>IEEE TCSE Distinguished Paper Award</strong>
                    <br />
                    At the International Conference on Software Maintenance and
                    Evolution (ICSME), 2019, for the paper:
                    <br />
                    <a href="https://doi.org/10.1109/ICSME.2019.00089">
                        "Assuring the Evolvability of Microservices: Insights
                        into Industry Practices and Challenges"
                    </a>
                </p>

                <p>
                    <strong>Best Student Paper Award</strong>
                    <br />
                    At the European Conference on Service-Oriented and Cloud
                    Computing (ESOCC), 2018, for the paper:
                    <br />
                    <a href="https://doi.org/10.1007/978-3-030-63161-1_10">
                        "Towards an Evolvability Assurance Method for
                        Service-Based Systems"
                    </a>
                </p>

                <p>
                    <strong>Best Presentation Award</strong>
                    <br />
                    At the Central European Workshop on Services and their
                    Composition (ZEUS), 2018, for the paper:
                    <br />
                    <a href="http://ceur-ws.org/Vol-2072/paper2.pdf">
                        "Analyzing the Relevance of SOA Patterns for
                        Microservice-Based Systems"
                    </a>
                </p>

                <p>
                    <strong>Master Thesis Award</strong>
                    <br />
                    From the Herman Hollerith Center, 2015, for my M.Sc. thesis:
                    <br />
                    "Identifying Relevant Software Architecture Patterns for IT
                    Service Monitoring and Reporting Solutions"
                </p>
            </div>
        </div>
    );
};

export default Awards;

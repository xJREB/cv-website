import { Link } from "gatsby";
import Layout from "../components/layout";

const Publications = () => {
    return (
        <Layout pageTitle="Publications">
            <div className="page-wrapper">
                <div className="home-inner">
                    <section>
                        <h1>Publications</h1>
                        <p>
                            I have (co-)authored over 75 peer-reviewed
                            publications in various journals, conferences, and
                            workshops. These papers have accumulated over 2700
                            citations and won several{" "}
                            <Link to="/#awards">awards</Link>. In this section,
                            I highlight a few selected studies that I am
                            particularly fond of. For a complete list, please
                            refer to my{" "}
                            <a href="https://scholar.google.com/citations?user=m_ecDXgAAAAJ&hl=en">
                                Google Scholar profile
                            </a>
                            .
                        </p>
                        <hr />
                        <h3>Software Engineering for AI (SE4AI)</h3>
                        <ul>
                            <li>
                                F. Amou Najafabadi, <strong>J. Bogner</strong>,
                                I. Gerostathopoulos, and P. Lago, "An Analysis
                                of MLOps Architectures: A Systematic Mapping
                                Study," in European Conference on Software
                                Architecture (ECSA), Springer Nature
                                Switzerland, 2024, pp. 69-85. doi:
                                10.1007/978-3-031-70797-1_5.
                                <br />
                                <a href="https://doi.org/10.1007/978-3-031-70797-1_5">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2406.19847">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                H. Järvenpää, P. Lago,{" "}
                                <strong>J. Bogner</strong>, G. Lewis, H.
                                Muccini, and I. Ozkaya, "A Synthesis of Green
                                Architectural Tactics for ML-Enabled Systems,"
                                in Proceedings of the 46th International
                                Conference on Software Engineering: Software
                                Engineering in Society, Lisbon Portugal: ACM,
                                Apr. 2024, pp. 130-141. doi:
                                10.1145/3639475.3640111.
                                <br />
                                <a href="https://doi.org/10.1145/3639475.3640111">
                                    Link
                                </a>{" "}
                                (open access)
                            </li>
                            <li>
                                J. Castaño, M.-F. Silverio, X. Franch, and{" "}
                                <strong>J. Bogner</strong>, "Analyzing the
                                Evolution and Maintenance of ML Models on
                                Hugging Face," in Proceedings of the 21st
                                International Conference on Mining Software
                                Repositories, Lisbon Portugal: ACM, Apr. 2024,
                                pp. 607-618. doi: 10.1145/3643991.3644898.
                                <br />
                                <a href="https://doi.org/10.1145/3643991.3644898">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2311.13380">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                J. Castaño, S. Martínez-Fernández, X. Franch,
                                and <strong>J. Bogner</strong>, "Exploring the
                                Carbon Footprint of Hugging Face's ML Models: A
                                Repository Mining Study," in 2023 ACM/IEEE
                                International Symposium on Empirical Software
                                Engineering and Measurement (ESEM), New Orleans,
                                LA, USA: IEEE, Oct. 2023, pp. 1-12. doi:
                                10.1109/ESEM56168.2023.10304801.
                                <br />
                                <a href="https://doi.org/10.1109/ESEM56168.2023.10304801">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2305.11164">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                L. Heiland, M. Hauser, and{" "}
                                <strong>J. Bogner</strong>, "Design Patterns for
                                AI-based Systems: A Multivocal Literature Review
                                and Pattern Repository," in 2023 IEEE/ACM 2nd
                                International Conference on AI Engineering -
                                Software Engineering for AI (CAIN), Melbourne,
                                Australia: IEEE, May 2023, pp. 184-196. doi:
                                10.1109/CAIN58948.2023.00035.
                                <br />
                                <a href="https://doi.org/10.1109/CAIN58948.2023.00035">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2303.13173">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                S. Martínez-Fernández,{" "}
                                <strong>J. Bogner</strong>, X. Franch et al.,
                                "Software Engineering for AI-Based Systems: A
                                Survey," ACM Transactions on Software
                                Engineering and Methodology, vol. 31, no. 2, pp.
                                1-59, Apr. 2022, doi: 10.1145/3487043.
                                <br />
                                <a href="https://doi.org/10.1145/3487043">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="http://arxiv.org/abs/2105.01984">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                <strong>J. Bogner</strong>, R. Verdecchia, and
                                I. Gerostathopoulos, "Characterizing Technical
                                Debt and Antipatterns in AI-Based Systems: A
                                Systematic Mapping Study," in 2021 IEEE/ACM
                                International Conference on Technical Debt
                                (TechDebt), IEEE, May 2021, pp. 64-73. doi:
                                10.1109/TechDebt52882.2021.00016.
                                <br />
                                <a href="https://doi.org/10.1109/TechDebt52882.2021.00016">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2103.09783">
                                    Preprint
                                </a>
                            </li>
                        </ul>
                        <hr />
                        <h3>Microservices and Web APIs</h3>
                        <ul>
                            <li>
                                <strong>J. Bogner</strong>, S. Kotstein, D.
                                Abajirov, T. Ernst, and M. Merkel, "RESTRuler:
                                Towards Automatically Identifying Violations of
                                RESTful Design Rules in Web APIs," in 2024 IEEE
                                21st International Conference on Software
                                Architecture (ICSA), Hyderabad, India: IEEE,
                                Jun. 2024, pp. 123-134. doi:
                                10.1109/ICSA59870.2024.00020.
                                <br />
                                <a href="https://doi.org/10.1109/ICSA59870.2024.00020">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2402.13710">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                <strong>J. Bogner</strong>, P. Wójcik, and O.
                                Zimmermann, "How Do Microservice API Patterns
                                Impact Understandability? A Controlled
                                Experiment," in 2024 IEEE 21st International
                                Conference on Software Architecture (ICSA),
                                Hyderabad, India: IEEE, Jun. 2024, pp. 158-169.
                                doi: 10.1109/ICSA59870.2024.00023.
                                <br />
                                <a href="https://doi.org/10.1109/ICSA59870.2024.00023">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2402.13696">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                <strong>J. Bogner</strong>, S. Kotstein, and T.
                                Pfaff, "Do RESTful API design rules have an
                                impact on the understandability of Web APIs?,"
                                Empirical Software Engineering, vol. 28, no. 6,
                                p. 132, Nov. 2023, doi:
                                10.1007/s10664-023-10367-y.
                                <br />
                                <a href="https://doi.org/10.1007/s10664-023-10367-y">
                                    Link
                                </a>{" "}
                                (open access)
                            </li>
                            <li>
                                J. Fritzsch, <strong>J. Bogner</strong>, M. Haug
                                et al., "Adopting microservices and DevOps in
                                the cyber-physical systems domain: A rapid
                                review and case study," Software: Practice and
                                Experience, vol. 53, no. 3, pp. 790-810, Nov.
                                2022, doi: 10.1002/spe.3169.
                                <br />
                                <a href="https://doi.org/10.1002/spe.3169">
                                    Link
                                </a>{" "}
                                (open access)
                            </li>
                            <li>
                                G. Vale, F. F. Correia, E. M. Guerra, T. de
                                Oliveira Rosa, J. Fritzsch, and{" "}
                                <strong>J. Bogner</strong>, "Designing
                                Microservice Systems Using Patterns: An
                                Empirical Study on Quality Trade-Offs," in 2022
                                IEEE 19th International Conference on Software
                                Architecture (ICSA), IEEE, Mar. 2022, pp. 69-79.
                                doi: 10.1109/ICSA53651.2022.00015.
                                <br />
                                <a href="https://doi.org/10.1109/ICSA53651.2022.00015">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2201.03598">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                <strong>J. Bogner</strong>, J. Fritzsch, S.
                                Wagner, and A. Zimmermann, "Industry practices
                                and challenges for the evolvability assurance of
                                microservices," Empirical Software Engineering,
                                vol. 26, no. 5, p. 104, Jul. 2021, doi:
                                10.1007/s10664-021-09999-9.
                                <br />
                                <a href="https://doi.org/10.1007/s10664-021-09999-9">
                                    Link
                                </a>{" "}
                                (open access)
                            </li>
                        </ul>
                        <hr />
                        <h3>Miscellaneous</h3>
                        <ul>
                            <li>
                                M. Wyrich and <strong>J. Bogner</strong>,
                                "Beyond Self-Promotion: How Software Engineering
                                Research Is Discussed on LinkedIn," in
                                Proceedings of the 46th International Conference
                                on Software Engineering: Software Engineering in
                                Society, Lisbon Portugal: ACM, Apr. 2024, pp.
                                85-95. doi: 10.1145/3639475.3640113.
                                <br />
                                <a href="https://doi.org/10.1145/3639475.3640113">
                                    Link
                                </a>{" "}
                                (open access)
                            </li>
                            <li>
                                M. Wyrich, <strong>J. Bogner</strong>, and S.
                                Wagner, "40 Years of Designing Code
                                Comprehension Experiments: A Systematic Mapping
                                Study," ACM Computing Surveys, p. 3626522, Oct.
                                2023, doi: 10.1145/3626522.
                                <br />
                                <a href="https://doi.org/10.1145/3626522">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2206.11102">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                J. Fritzsch, M. Wyrich,{" "}
                                <strong>J. Bogner</strong>, and S. Wagner,
                                "Resist the Hype! Practical Recommendations to
                                Cope With Résumé-Driven Development," IEEE
                                Software, pp. 1-8, 2023, doi:
                                10.1109/MS.2023.3277034.
                                <br />
                                <a href="https://doi.org/10.1109/MS.2023.3277034">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2307.02850">
                                    Preprint
                                </a>
                            </li>
                            <li>
                                <strong>J. Bogner</strong> and M. Merkel, "To
                                Type or Not to Type? A Systematic Comparison of
                                the Software Quality of JavaScript and
                                TypeScript Applications on GitHub," in 2022
                                IEEE/ACM 19th International Conference on Mining
                                Software Repositories (MSR), May 2022, pp.
                                658-669. doi: 10.1145/3524842.3528454.
                                <br />
                                <a href="https://doi.org/10.1145/3524842.3528454">
                                    Link
                                </a>{" "}
                                |{" "}
                                <a href="https://arxiv.org/abs/2203.11115">
                                    Preprint
                                </a>
                            </li>
                        </ul>
                        <hr />
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Publications;

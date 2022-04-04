import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const Publications = () => {
    return (
        <Layout pageTitle="Publications">
            <div className="home-inner">
                <section>
                    <h1>Publications</h1>
                    <p>
                        I have (co-)authored over 40 peer-reviewed publications
                        in various journals, conferences, and workshops. These
                        papers have accumulated over 600 citations and have won
                        several <Link to="/#awards">awards</Link>. In this
                        section, I highlight a few selected studies that I am
                        particularly fond of. For a complete list, please refer
                        to my{" "}
                        <a href="https://scholar.google.com/citations?user=m_ecDXgAAAAJ&hl=en">
                            Google Scholar profile
                        </a>
                        .
                    </p>

                    <hr />

                    <p>
                        <strong>
                            S. Martínez-Fernández, <em>J. Bogner</em>, X.
                            Franch, M. Oriol et al., "Software Engineering for
                            AI-Based Systems: A Survey," ACM Trans. Softw. Eng.
                            Methodol., vol. 31, no. 2, pp. 1-59, Apr. 2022.
                        </strong>
                        <br />
                        <a href="https://doi.org/10.1145/3487043">
                            Link
                        </a> |{" "}
                        <a href="http://arxiv.org/abs/2105.01984">Preprint</a>
                        <br />
                        <div className="publications-abstracts">
                            <em>Abstract</em>:<br />
                            AI-based systems are software systems with
                            functionalities enabled by at least one AI component
                            (e.g., for image-, speech-recognition, and
                            autonomous driving). AI-based systems are becoming
                            pervasive in society due to advances in AI. However,
                            there is limited synthesized knowledge on Software
                            Engineering (SE) approaches for building, operating,
                            and maintaining AI-based systems. To collect and
                            analyze state-of-the- art knowledge about SE for
                            AI-based systems, we conducted a systematic mapping
                            study. We considered 248 studies published between
                            January 2010 and March 2020. SE for AI-based systems
                            is an emerging research area, where more than 2/3 of
                            the studies have been published since 2018. The most
                            studied properties of AI-based systems are
                            dependability and safety. We identified multiple SE
                            approaches for AI-based systems, which we classified
                            according to the SWEBOK areas. Studies related to
                            software testing and software quality are very
                            prevalent, while areas like software maintenance
                            seem neglected. Data-related issues are the most
                            recurrent challenges. Our results are valuable for:
                            researchers, to quickly understand the
                            state-of-the-art and learn which topics need more
                            research; practitioners, to learn about the
                            approaches and challenges that SE entails for
                            AI-based systems; and, educators, to bridge the gap
                            among SE and AI in their curricula.
                        </div>
                    </p>

                    <hr />

                    <p>
                        <strong>
                            <em>J. Bogner</em>, J. Fritzsch, S. Wagner, and A.
                            Zimmermann, "Industry practices and challenges for
                            the evolvability assurance of microservices," Empir.
                            Softw. Eng., vol. 26, no. 5, p. 104, Jul. 2021.
                        </strong>
                        <br />
                        <a href="https://doi.org/10.1007/s10664-021-09999-9">
                            Link
                        </a>{" "}
                        (open access)
                        <br />
                        <div className="publications-abstracts">
                            <em>Abstract</em>:<br />
                            Context: Microservices as a lightweight and
                            decentralized architectural style with fine-grained
                            services promise several beneficial characteristics
                            for sustainable long-term software evolution.
                            Success stories from early adopters like Netflix,
                            Amazon, or Spotify have demonstrated that it is
                            possible to achieve a high degree of flexibility and
                            evolvability with these systems. However, the
                            described advantageous characteristics offer no
                            concrete guidance and little is known about
                            evolvability assurance processes for microservices
                            in industry as well as challenges in this area.
                            Insights into the current state of practice are a
                            very important prerequisite for relevant research in
                            this field.
                            <br />
                            Objective: We therefore wanted to explore how
                            practitioners structure the evolvability assurance
                            processes for microservices, what tools, metrics,
                            and patterns they use, and what challenges they
                            perceive for the evolvability of their systems.
                            <br />
                            Method: We first conducted 17 semi-structured
                            interviews and discussed 14 different
                            microservice-based systems and their assurance
                            processes with software professionals from 10
                            companies. Afterwards, we performed a systematic
                            grey literature review (GLR) and used the created
                            interview coding system to analyze 295 practitioner
                            online resources.
                            <br />
                            Results: The combined analysis revealed the
                            importance of finding a sensible balance between
                            decentralization and standardization. Guidelines
                            like architectural principles were seen as valuable
                            to ensure a base consistency for evolvability and
                            specialized test automation was a prevalent theme.
                            Source code quality was the primary target for the
                            usage of tools and metrics for our interview
                            participants, while testing tools and productivity
                            metrics were the focus of our GLR resources. In both
                            studies, practitioners did not mention architectural
                            or service-oriented tools and metrics, even though
                            the most crucial challenges like Service Cutting or
                            Microservices Integration were of an architectural
                            nature.
                            <br />
                            Conclusions: Practitioners relied on guidelines,
                            standardization, or patterns like Event-Driven
                            Messaging to partially address some reported
                            evolvability challenges. However, specialized
                            techniques, tools, and metrics are needed to support
                            industry with the continuous evaluation of service
                            granularity and dependencies. Future microservices
                            research in the areas of maintenance, evolution, and
                            technical debt should take our findings and the
                            reported industry sentiments into account.
                        </div>
                    </p>

                    <hr />

                    <p>
                        <strong>
                            <em>J. Bogner</em>, R. Verdecchia, and I.
                            Gerostathopoulos, "Characterizing Technical Debt and
                            Antipatterns in AI-Based Systems: A Systematic
                            Mapping Study," in 2021 IEEE/ACM International
                            Conference on Technical Debt (TechDebt), 2021, pp.
                            64-73.
                        </strong>
                        <br />
                        <a href="https://doi.org/10.1109/TechDebt52882.2021.00016">
                            Link
                        </a>{" "}
                        |{" "}
                        <a href="https://arxiv.org/abs/2103.09783">Preprint</a>
                        <br />
                        <div className="publications-abstracts">
                            <em>Abstract</em>:<br />
                            Background: With the rising popularity of Artificial
                            Intelligence (AI), there is a growing need to build
                            large and complex AI-based systems in a
                            cost-effective and manageable way. Like with
                            traditional software, Technical Debt (TD) will
                            emerge naturally over time in these systems,
                            therefore leading to challenges and risks if not
                            managed appropriately. The influence of data science
                            and the stochastic nature of AI-based systems may
                            also lead to new types of TD or antipatterns, which
                            are not yet fully understood by researchers and
                            practitioners.
                            <br />
                            Objective: The goal of our study is to provide a
                            clear overview and characterization of the types of
                            TD (both established and new ones) that appear in
                            AI-based systems, as well as the antipatterns and
                            related solutions that have been proposed.
                            <br />
                            Method: Following the process of a systematic
                            mapping study, 21 primary studies are identified and
                            analyzed.
                            <br />
                            Results: Our results show that (i) established TD
                            types, variations of them, and four new TD types
                            (data, model, configuration, and ethics debt) are
                            present in AI-based systems, (ii) 72 antipatterns
                            are discussed in the literature, the majority
                            related to data and model deficiencies, and (iii) 46
                            solutions have been proposed, either to address
                            specific TD types, antipatterns, or TD in general.
                            <br />
                            Conclusions: Our results can support AI
                            professionals with reasoning about and communicating
                            aspects of TD present in their systems.
                            Additionally, they can serve as a foundation for
                            future research to further our understanding of TD
                            in AI-based systems.
                        </div>
                    </p>

                    <hr />

                    <p>
                        <strong>
                            J. Fritzsch, M. Wyrich, <em>J. Bogner</em>, and S.
                            Wagner, "Résumé-Driven Development: A Definition and
                            Empirical Characterization," in 2021 IEEE/ACM 43rd
                            International Conference on Software Engineering:
                            Software Engineering in Society (ICSE-SEIS), 2021,
                            pp. 19-28.
                        </strong>
                        <br />
                        <a href="https://doi.org/10.1109/ICSE-SEIS52602.2021.00011">
                            Link
                        </a>{" "}
                        | <a href="http://arxiv.org/abs/2101.12703">Preprint</a>
                        <br />
                        <div className="publications-abstracts">
                            <em>Abstract</em>:<br />
                            Technologies play an important role in the hiring
                            process for software professionals. Within this
                            process, several studies revealed misconceptions and
                            bad practices which lead to suboptimal recruitment
                            experiences. In the same context, grey literature
                            anecdotally coined the term Résumé-Driven
                            Development (RDD), a phenomenon describing the
                            overemphasis of trending technologies in both job
                            offerings and resumes as an interaction between
                            employers and applicants. While RDD has been
                            sporadically mentioned in books and online
                            discussions, there are so far no scientific studies
                            on the topic, despite its potential negative
                            consequences. We therefore empirically investigated
                            this phenomenon by surveying 591 software
                            professionals in both hiring (130) and technical
                            (558) roles and identified RDD facets in substantial
                            parts of our sample: 60% of our hiring professionals
                            agreed that trends influence their job offerings,
                            while 82% of our software professionals believed
                            that using trending technologies in their daily work
                            makes them more attractive for prospective
                            employers. Grounded in the survey results, we
                            conceptualize a theory to frame and explain
                            Résumé-Driven Development. Finally, we discuss
                            influencing factors and consequences and propose a
                            definition of the term. Our contribution provides a
                            foundation for future research and raises awareness
                            for a potentially systemic trend that may broadly
                            affect the software industry.
                        </div>
                    </p>
                    <hr />
                </section>
            </div>
        </Layout>
    );
};

export default Publications;

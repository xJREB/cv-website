import Layout from "../components/layout";

const programCommitteeActivities = [
    {
        year: 2027,
        items: [
            "24th International Conference on Software Architecture (ICSA), Research Track",
            "6th International Conference on AI Engineering (CAIN), Research Track",
        ],
    },
    {
        year: 2026,
        items: [
            "20th International Symposium on Empirical Software Engineering and Measurement (ESEM), Technical Track",
            "20th European Conference on Software Architecture (ECSA), Research Track",
            "12th International Conference on ICT for Sustainability (ICT4S), Research Track",
            "23rd International Conference on Software Architecture (ICSA), Research Track",
            "23rd International Conference on Mining Software Repositories (MSR), Registered Reports Track",
            "48th International Conference on Software Engineering (ICSE), Research Track",
        ],
    },
    {
        year: 2025,
        items: [
            "1st International Workshop on Software Architecture for Data-Intensive Systems (SADIS)",
            "19th European Conference on Software Architecture (ECSA), Research Track",
            "29th International Conference on Evaluation and Assessment in Software Engineering (EASE), Research Track",
            "3rd International Workshop on Responsible AI Engineering (RAIE)",
            "22nd International Conference on Software Architecture (ICSA), Research Track and Artifact Evaluation",
            "4th International Conference on AI Engineering (CAIN), Research Track and Doctoral Symposium",
        ],
    },
    {
        year: 2024,
        items: [
            "21st International Conference on Software Architecture (ICSA), Artifact Evaluation Track",
            "18th International Symposium on Empirical Software Engineering and Measurement (ESEM), Technical Track",
            "17th International Conference on the Quality of Information and Communications Technology (QUATIC), Quality Aspects of Services and Cloud Computing Track",
            "18th European Conference on Software Architecture (ECSA), Research Track",
            "8th International Workshop on Green and Sustainable Software (GREENS)",
            "2nd International Workshop on Responsible AI Engineering (RAIE)",
            "31st International Conference on Software Analysis, Evolution and Reengineering (SANER), RENE Track",
            "3rd International Conference on AI Engineering (CAIN), Research Track and Doctoral Symposium",
        ],
    },
    {
        year: 2023,
        items: [
            "17th International Symposium on Empirical Software Engineering and Measurement (ESEM), ERVR Track",
            "17th European Conference on Software Architecture (ECSA), Research Track",
            "5th International Conference on Microservices (Microservices)",
            "10th European Conference On Service-Oriented And Cloud Computing (ESOCC), Main Track",
            "49th Euromicro Conference on Software Engineering and Advanced Applications (SEAA), DAIDE Track",
            "2nd International Conference on AI Engineering (CAIN)",
            "20th International Conference on Software Architecture (ICSA), NEMI Track",
        ],
    },
    {
        year: 2022,
        items: [
            "16th European Conference on Software Architecture (ECSA), Research Track",
            "3rd International Workshop on Agility with Microservices Programming (AMP)",
            "48th Euromicro Conference on Software Engineering and Advanced Applications (SEAA), CNADO Track",
        ],
    },
    {
        year: 2021,
        items: [
            "15th European Conference on Software Architecture (ECSA), Tools & Demos Track",
            "2nd International Workshop on Agility with Microservices Programming (AMP)",
            "47th Euromicro Conference on Software Engineering and Advanced Applications (SEAA), CNADO Track",
        ],
    },
    {
        year: 2020,
        items: [
            "1st International Workshop on Agility with Microservices Programming (AMP)",
            "46th Euromicro Conference on Software Engineering and Advanced Applications (SEAA), CNADO Track",
            "12th Central-European Workshop on Services and their Composition (ZEUS)",
        ],
    },
];

const organizationCommitteeActivities = [
    {
        year: 2027,
        items: [
            "21st European Conference on Software Architecture (ECSA), program committee co-chair",
            "6th International Workshop on Software Architecture and Machine Learning (SAML), co-chair",
            "24th International Conference on Software Architecture (ICSA), sustainability co-chair",
        ],
    },
    {
        year: 2026,
        items: [
            "9th International Software Architecture PhD School (ISAPS), co-organizer",
            "5th International Workshop on Software Architecture and Machine Learning (SAML), co-chair",
            "20th International Symposium on Empirical Software Engineering and Measurement (ESEM), open science co-chair",
            "23rd International Conference on Software Architecture (ICSA), sponsorship co-chair",
            "5th International Conference on AI Engineering (CAIN), program committee co-chair",
        ],
    },
    {
        year: 2025,
        items: [
            "4th International Workshop on Software Architecture and Machine Learning (SAML), co-chair",
            "11th International Conference on ICT for Sustainability (ICT4S), publications chair",
        ],
    },
    {
        year: 2024,
        items: [
            "18th European Conference on Software Architecture (ECSA), open science chair",
            "3rd International Workshop on Software Architecture and Machine Learning (SAML), co-chair",
            "3rd International Conference on AI Engineering (CAIN), doctoral symposium co-chair",
            "21st International Conference on Software Architecture (ICSA), publications co-chair",
        ],
    },
    {
        year: 2023,
        items: [
            "2nd International Conference on AI Engineering (CAIN), proceedings chair",
        ],
    },
    {
        year: 2022,
        items: [
            "2nd International Workshop on Software Architecture and Machine Learning (SAML), co-chair",
        ],
    },
];

const YearAccordion = ({ groups, frequencyText }) => (
    <>
        {groups.map(({ year, items }, index) => (
            <details key={year} open={index < 2}>
                <summary>
                    {year}{" "}
                    <small>
                        ({frequencyText}: {items.length})
                    </small>
                </summary>
                <ul>
                    {items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </details>
        ))}
    </>
);

const Service = () => {
    return (
        <Layout pageTitle="Service">
            <div className="page-wrapper">
                <div className="home-inner">
                    <section>
                        <h1>Service</h1>
                        <p>
                            I am an active member of the SE research community
                            and support my and other university departments in
                            several areas.
                        </p>

                        <h3>Program Committee Activities</h3>
                        <YearAccordion
                            groups={programCommitteeActivities}
                            frequencyText={"PC memberships"}
                        />

                        <h3>Journal and Grant Reviewing Activities</h3>
                        <ul>
                            <li>
                                Empirical Software Engineering (EMSE), Springer
                            </li>
                            <li>
                                IEEE Transactions on Software Engineering (TSE)
                            </li>
                            <li>IEEE Software</li>
                            <li>IEEE Computer</li>
                            <li>
                                ACM Transactions on Software Engineering and
                                Methodology (TOSEM)
                            </li>
                            <li>Software: Practice and Experience, Wiley</li>
                            <li>Software: Evolution and Process, Wiley</li>
                            <li>
                                Artificial Intelligence Review (AIRE), Springer
                            </li>
                            <li>Journal of Big Data (JBD), Springer</li>
                            <li>
                                Service-Oriented Computing and Applications
                                (SOCA), Springer
                            </li>
                            <li>PeerJ Computer Science</li>
                            <li>IET Software</li>
                            <li>SoftwareX, Elsevier</li>
                            <li>
                                Journal of Systems and Software (JSS), Elsevier
                            </li>
                            <li>
                                Information and Software Technology (IST),
                                Elsevier
                            </li>
                            <li>German Research Foundation (DFG)</li>
                        </ul>

                        <h3>
                            Editorial Board and Steering Committee Activities
                        </h3>
                        <ul>
                            <li>
                                IEEE Software, Associate Editor for
                                Journal-First Conference Tracks (J1C2) and
                                Awards
                            </li>
                            <li>
                                International Conference on Software
                                Architecture (ICSA), At-Large Member in the
                                Steering Committee (2025 - 2027)
                            </li>
                            <li>
                                International Conference on AI Engineering
                                (CAIN), Steering Committee Member (2025 - 2027)
                            </li>
                        </ul>

                        <h3>Organization Committee Activities</h3>
                        <YearAccordion
                            groups={organizationCommitteeActivities}
                            frequencyText={"OC memberships"}
                        />

                        <h3>Departmental Service and Invitations</h3>
                        <ul>
                            <li>
                                <strong>current (since 2024/09):</strong> staff
                                member of the programme committee (
                                <a href="https://vu.nl/en/student/participation-in-decision-making/programme-committees">
                                    OLC
                                </a>
                                ) for the M.Sc. Computer Science at VU Amsterdam
                            </li>
                            <li>
                                <strong>current (since 2024/02):</strong> member
                                of the scientific advisory council (ARW) of the
                                VU's Department of Computer Science
                            </li>
                            <li>
                                <strong>current (since 2024/02):</strong>{" "}
                                scientific coordinator at the VU's{" "}
                                <a href="https://digitalsustainabilitycenter.nl">
                                    Digital Sustainability Center
                                </a>{" "}
                                (DiSC)
                            </li>
                            <li>
                                2025/11: invited seminar about software
                                architecture for AI-based systems and Green AI
                                at the AI Engineering Lab, Chalmers University
                                of Technology / University of Gothenburg,
                                invited by Prof. Dr. Jennifer Horkoff
                            </li>
                            <li>
                                2025/06: invited seminar about software
                                architecture for AI-based systems and Green AI
                                at the Department of Information Engineering,
                                University of Florence, invited by Dr. Roberto
                                Verdecchia
                            </li>
                            <li>
                                2025/02: participation in the CECAM-Lorentz
                                Workshop{" "}
                                <a href="https://www.cecam.org/workshop-details/greening-ai-with-software-engineering-1358">
                                    "Greening AI with Software Engineering"
                                </a>
                            </li>
                            <li>
                                2024/11: invited talk about Green AI at the
                                Amsterdam AI Meetup of{" "}
                                <a href="https://community.mindstone.com/events/amsterdam_ai_meetup_november_2024">
                                    Mindstone
                                </a>
                            </li>
                            <li>
                                2024/11: appeared on an episode of Dr. Daniel
                                Shea's{" "}
                                <a href="https://newbooksnetwork.com/your-reader-wants-also-to-see-your-point">
                                    Scholarly Communication
                                </a>{" "}
                                podcast to talk about my publications about
                                RESTful API quality
                            </li>
                            <li>
                                2024/11: invited talk about Green AI from a
                                software architecture perspective at the{" "}
                                <a href="https://www.softwareimprovementgroup.com">
                                    Software Improvement Group (SIG)
                                </a>
                            </li>
                            <li>
                                2024/11: invited talk about software
                                architecture for AI-based systems in the Fall
                                Days research school of the{" "}
                                <a href="https://ipa.win.tue.nl/?event=fall-days-on-models-for-constructing-software">
                                    Institute for Programming Research and
                                    Algorithmics (IPA)
                                </a>
                            </li>
                            <li>
                                2024/10: invited talk about Green AI from a
                                software architecture perspective at the{" "}
                                <a href="https://www.meetup.com/sustainable-it-netherlands/events/303351453">
                                    Sustainable IT Netherlands Meetup
                                </a>
                            </li>
                            <li>
                                2024/07: external examiner for an M.Sc. thesis
                                at the University of Groningen, invited by Prof.
                                Dr. Vasilios Andrikopoulos
                            </li>
                            <li>
                                2024/06: appeared on an episode of Dr. Jack
                                Waudby's{" "}
                                <a href="https://disseminatepodcast.podcastpage.io/episode/marvin-wyrich-justus-bogner-how-software-engineering-research-is-discussed-on-linkedin-56">
                                    Disseminate
                                </a>{" "}
                                podcast to talk about science communication in
                                CS / SE
                            </li>
                            <li>
                                2024/05: invited talk in the{" "}
                                <a href="https://www.dise-lab.nl">
                                    DISE research group
                                </a>{" "}
                                at VU Amsterdam about principles of scientific
                                writing
                            </li>
                            <li>
                                2024/05: invited talk on software architecture
                                for AI-based systems in the{" "}
                                <a href="https://www.aisa.uni-stuttgart.de">
                                    AI Software Academy (AISA)
                                </a>{" "}
                                colloquium at the University of Stuttgart
                            </li>
                            <li>
                                2023/08: invited talk at SAP on RESTful API
                                design in their Innovation Information Session
                                series
                            </li>
                            <li>
                                2023/07: participation in{" "}
                                <a href="https://www.dagstuhl.de/23302">
                                    Dagstuhl Seminar 23302
                                </a>{" "}
                                "Software Architecture and Machine Learning"
                            </li>
                            <li>
                                2022 winter: external examiner for an M.Sc.
                                thesis at Dublin City University, invited by
                                Prof. Dr. Paul M. Clarke
                            </li>
                            <li>
                                2021 winter - 2023 summer: member of the student
                                admission committee for the study programme
                                M.Sc. Software Engineering at the University of
                                Stuttgart
                            </li>
                            <li>
                                2021 summer: external member of two M.Sc.
                                defense committees at the University of Porto,
                                invited by Prof. Dr. Filipe Correia
                            </li>
                            <li>
                                2021 summer - 2023 summer: organizational role
                                in the{" "}
                                <a href="https://www.aisa.uni-stuttgart.de">
                                    AI Software Academy (AISA)
                                </a>{" "}
                                at the University of Stuttgart
                            </li>
                            <li>
                                2021 summer - 2023 summer: chair of the{" "}
                                <a href="https://www.iste.uni-stuttgart.de/ese/colloquium">
                                    student colloquium
                                </a>{" "}
                                of the Empirical Software Engineering group at
                                the University of Stuttgart
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Service;

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import {
    FaGithub,
    FaMailBulk,
    FaMastodon,
    FaResearchgate,
    FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";

const Footer = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                        social {
                            twitter
                            mastodon
                            github
                            email
                            researchgate
                            googleScholar
                        }
                    }
                }
            }
        `
    );
    const config = site.siteMetadata;
    const { twitter, mastodon, github, email, researchgate, googleScholar } =
        config.social;
    return (
        <div>
            <h2>
                <FaMailBulk></FaMailBulk> Contact
            </h2>
            <div>
                <p>You can reach or follow me via the following ways:</p>
                <MdEmail></MdEmail> Email:{" "}
                <a href={`mailto:${email}`}>{email}</a>
                <br />
                <FaMastodon></FaMastodon> Mastodon:{" "}
                <a href={mastodon}>{mastodon}</a>
                <br />
                <FaTwitter></FaTwitter> Twitter:{" "}
                <a href={twitter}>
                    {twitter.substring(twitter.indexOf(".com/") + 5)}
                </a>
                <br />
                <FaGithub></FaGithub> GitHub:{" "}
                <a href={github}>
                    {github.substring(github.indexOf(".com/") + 5)}
                </a>
                <br />
                <FaResearchgate></FaResearchgate> Researchgate:{" "}
                <a href={researchgate}>{config.author}</a>
                <br />
                <SiGooglescholar></SiGooglescholar> Google Scholar:{" "}
                <a href={googleScholar}>{config.author}</a>
                <p>
                    If you have questions about my research, want to write your
                    student thesis with me, or have an idea for a study
                    collaboration related to my research interest, feel free to
                    reach out!
                </p>
            </div>
        </div>
    );
};

export default Footer;

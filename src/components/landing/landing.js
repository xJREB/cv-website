import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Hero from "./hero";

const Landing = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                        description
                    }
                }
            }
        `
    );

    const { author, description } = site.siteMetadata;

    return (
        <div className="landing">
            <Hero>
                <div>
                    <h1>Dr. {author}</h1>
                    <p>{description}</p>
                    <div className="landing-links">
                        <Link to="/#contact">Contact</Link>
                        <Link to="/#research">Research</Link>
                        <Link to="/#awards">Awards</Link>
                    </div>
                </div>
            </Hero>
        </div>
    );
};

export default Landing;

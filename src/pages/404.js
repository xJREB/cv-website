import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => (
    <Layout pageTitle="404 Not Found">
        <div className="home-inner">
            <section>
                <h1>404 Page Not Found</h1>
                <p>
                    You followed an outdated link or entered a URL that doesn't
                    exist on this site. Maybe try via the{" "}
                    <Link to="/">home page</Link>?
                </p>
            </section>
        </div>
    </Layout>
);

export default NotFoundPage;

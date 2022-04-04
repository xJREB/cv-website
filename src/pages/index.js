import * as React from "react";
import { GutterLeft, GutterRight } from "../components/gutter/gutter";
import About from "../components/home-about";
import Awards from "../components/home-awards";
import Contact from "../components/home-contact";
import Research from "../components/home-research";
import Landing from "../components/landing/landing";
import Layout from "../components/layout";

const Home = () => {
    return (
        <Layout pageTitle="Home Page">
            <Landing />
            <div className="home-layout">
                <GutterLeft />
                <div className="home-inner">
                    <section className="about">
                        <About></About>
                    </section>

                    <section className="research" id="research">
                        <Research></Research>
                    </section>

                    <section className="awards" id="awards">
                        <Awards></Awards>
                    </section>

                    <section className="contact" id="contact">
                        <Contact></Contact>
                    </section>
                </div>
                <GutterRight />
            </div>
        </Layout>
    );
};

export default Home;

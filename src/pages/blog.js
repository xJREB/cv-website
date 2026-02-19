import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const Blog = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    // prepare list of posts
    const Posts = edges.map((edge) => (
        <div key={edge.node.id} className="blog-list-item">
            <Link to={edge.node.frontmatter.path}>
                {edge.node.frontmatter.title}
            </Link>{" "}
            ({edge.node.frontmatter.date})<p>{edge.node.excerpt}</p>
        </div>
    ));

    return (
        <Layout pageTitle="My Blog">
            <div className="page-wrapper">
                <div className="home-inner">
                    <section>
                        <h1>Blog</h1>
                        <p>
                            Every now and then, I will create blog posts to
                            share something that I think may be interesting for
                            others. It won't be regularly or frequently, but,
                            sometimes, I will consider some events or
                            experiences worthwhile to post about them. Plus,
                            there are some things that I wanted to write about
                            for a long time.
                        </p>
                        <div>{Posts}</div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Blog;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`;

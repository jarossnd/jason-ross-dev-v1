import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Bio from '../components/bio';
import SEO from '../components/seo';

const PostStyles = styled.div`
  border: 3px solid var(--black);
  border-radius: 15px;
  font-size: 3rem;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 20px;
  background-color: var(--blue);
  h3 {
    margin: 0px;
  }
  .post-link {
    text-decoration: none;
    color: var(--yellow);
  }
  a:hover {
    border-bottom: 3px solid var(--yellow);
    border-color: var(--yellow);
    border-bottom-color: var(--yellow);
  }
`;


const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const posts = data.allMarkdownRemark.nodes;
  
    if (posts.length === 0) {
      return (
        <Layout location={location} title={siteTitle}>
          <SEO title="All posts" />
  
          <p>
            No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the
            "gatsby-source-filesystem" plugin in gatsby-config.js).
          </p>
        </Layout>
      );
    }
  
    return (
      <div location={location} title={siteTitle} className="item2">
        <h1>Articles</h1>
        <h2>I would rather be developing than writing but here is what I have 😁</h2>
        <SEO title="Articles" />
  
        <ol style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            return (
              <li key={post.fields.slug}>
                <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                  <PostStyles>
                      <h3>
                        <Link to={post.fields.slug} itemProp="url" class="post-link">
                            <span itemProp="headline">{title}</span>
                        </Link>
                    </h3>
                    <p>Date: {post.frontmatter.date}</p>
  
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </PostStyles>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    );
  };
  
  export default BlogIndex;
  
  export const pageQuery = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  `;
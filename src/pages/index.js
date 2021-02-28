import  React from "react";
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const TwitterStyles = styled.div`
  .tweet-container {
    border: 3px solid var(--black);
    border-radius: 15px;
    font-size: 3rem;
    text-decoration: none;
    margin-bottom: 20px;
    padding: 20px;
    background-color: var(--blue);
  }
`;

const ArticleStyles = styled.div`
  .tweet-container {
    border: 3px solid var(--black);
    border-radius: 15px;
    font-size: 3rem;
    text-decoration: none;
    margin-bottom: 20px;
    padding: 20px;
    background-color: var(--blue);
  }
`;

export default function HomePage() {
  return (
    <>
    <div className="item1">
      <h1>Welcome</h1>
      <h2>Howdy, my name is Jason Ross 👋 </h2>
      <p>
      I am a technology enthusiast who enjoys web development, leadership, firearms, and fitness. Currently, I am employed at a large fortune 100 company in the United Sates. In my free time, I occasionally like to take on new side projects that pertain to my interests. Feel free to get in contact with me if you want to connect. Thanks for visiting my corner of the internet and I hope you enjoy my site. Cheers! 🍻
      </p>
    </div>
    <div className="item2" />
      <div className="item3">
        <h2>Twitter</h2>
        <StaticQuery
          query={graphql`
            query MyQuery {
              allTwitterStatusesUserTimelineGetPosts {
                edges {
                  node {
                    full_text
                    created_at
                    favorite_count
                    id_str
                  }
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
          `}
          render={(data) => (
            <TwitterStyles>
              <div>
                {data.allTwitterStatusesUserTimelineGetPosts.edges.map((item, i) => (
                  <div key={i} className="tweet-container">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://twitter.com/jaross/status/${item.node.id_str}`}
                      style={{ textDecoration: 'none', color: 'var(--yellow)' }}
                    >
                      {item.node.full_text}
                    </a>
                    <div
                      style={{
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          textAlign: 'center',
                        }}
                      >
                        {item.node.created_at} | {item.node.favorite_count}
                        <span style={{ marginRight: '5px', color: 'Red' }}> ♥️</span>
                      </div>
                      <div
                        style={{
                          textAlign: 'center',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TwitterStyles>
          )}
        />
      </div>
    </>
  )
}
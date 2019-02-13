import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'

const BlogHome = ({ data }) => {
  // filter out privacy policies
  const filteredPosts = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.type !== 'privacy')
  return (
    <>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p>Whee.</p>
      <h4>{filteredPosts.length} Posts</h4>
        {filteredPosts.map(({ node }) => (
          <div key={node.id}>
            <Link style={{textDecoration: 'none',
                color: 'inherit'}}to={node.fields.slug}>
              <h3 style={{textDecoration: 'underline'}}>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link> 
          </div>
        ))}
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            type
            title
            date(formatString: "MM/DD/YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
export default BlogHome

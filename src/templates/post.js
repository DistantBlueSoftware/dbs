import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'spaceBetween'}}>
          <h1>{post.frontmatter.title}</h1>
          <h6>posted on {post.frontmatter.date}</h6>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
      }
    }
  }
`
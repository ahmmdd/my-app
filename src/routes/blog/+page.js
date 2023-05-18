import { PUBLIC_BASE_URL } from '$env/static/public';
const query = `
  query Posts {
    posts {
      nodes {
        title
        date
        excerpt
        uri
        postId
        slug
        id
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            name
            uri
          }
        }
      }
    }
  }
`;
// featuredImage.node.mediaItemUrl
export async function load({fetch}) {
  try {
    const res = await fetch(PUBLIC_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const resObj = await res.json()
    const posts = resObj.data.posts.nodes

    return {
        posts,
    }
  } catch (e) {
    if (e instanceof Error) {
      let error = e.message;
      return {
        status: 404,
        body: error
      }
    }
  }
}

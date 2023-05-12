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
        id
      }
    }
  }
`;
// console.log(queryPosts.toString());
export async function load({fetch}) {
  try {
    const res = await fetch("http://poclynworks.local/graphql", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    // console.log("test1");
    const resObj = await res.json()
    console.log(resObj.toString());
    const posts = resObj.data.posts.nodes
    console.log(posts);

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
import { queryPosts } from '$lib/queries';
import { PUBLIC_BASE_URL } from '$env/static/public';

async () => {
  try {
    const res = await fetch(PUBLIC_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: queryPosts }),
    })
    const resObj = await res.json()
    const posts = resObj.data.posts.nodes

    return {
      status: 200,
      body: { posts },
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
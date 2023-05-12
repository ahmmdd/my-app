
import { queryPost } from '../../../lib/queries';
import { PUBLIC_BASE_URL } from '$env/static/public';

async (req) => {
  const { slug } = req.params
  try {
    const res = await fetch(PUBLIC_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: queryPost,
        variables: {
          slug,
        },
      }),
    })
    const resObj = await res.json()
    const post = resObj.data

    return {
      status: 200,
      body: post,
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
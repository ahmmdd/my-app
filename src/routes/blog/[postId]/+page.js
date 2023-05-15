
import { PUBLIC_BASE_URL } from '$env/static/public';

export const load = async({ fetch, params}) => {
  console.log('params.postId: ',params.postId)
  const query = `
    query Post {
      post(
        id: "${params.postId}"
        idType: SLUG
      ) {
        title
        content
      }
    }
    `;
    // console.log("1. QUERY: ", query);
  const res = await fetch(PUBLIC_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  // console.log("2. RES: ", res);
  const resObj = await res.json();
  // console.log("3. RES_OBJ: ",resObj);
  const post = resObj.data.post;
  // console.log("4. post: ", post);

  return { post: post }

}
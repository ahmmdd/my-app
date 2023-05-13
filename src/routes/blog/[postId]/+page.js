
// import { PUBLIC_BASE_URL } from '$env/static/public';
// https://www.youtube.com/watch?v=gNgQFF-tmuo&ab_channel=Huntabyte
// const queryPost = `
//   query getPost($slug: ID!) {
//     post(id: $slug, idType: SLUG) {
//       title
//       content
//     }
//   }
// `;
export const load = ({ fetch, params}) => {
  console.log(params)

  const fetchPost = async (title) => {
    const res = await fetch(title)
    const data = await res.json()
    return data
  }

  return {
    post: fetchPost(params.title)
  }

}
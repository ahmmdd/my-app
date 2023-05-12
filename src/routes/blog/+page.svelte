<script>
  export let data;
  let { posts } = data;
</script>

<h1>Blog Postma</h1>

{#each posts as post}
  <a href="{`/blog${post.uri}`}">
    <h2>{post.title}</h2>
  </a>
  {@html post.excerpt}
{/each}
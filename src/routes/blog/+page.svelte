<script>
  export let data;
</script>

<h1>POC BLOGS</h1>
<ul>
  <li><a href="/">Back</a></li>
</ul>
<div>
{#each data.posts as post}
  <a href="{`/blog/${post.title}`}">
    <h2>{post.title}</h2>
  </a>
  {@html post.excerpt}
{/each}
</div>
<script>
  export let data;
</script>

<h1>POC BLOGS</h1>
<ul>
  <li><a href="/">Back</a></li>
</ul>
<div>
{#each data.posts as post}
  <a href="{`/blog/${post.slug}`}">
    <h2>{post.title}</h2>
  </a>
  <p>{post.title}</p>
  
  <!-- {@html post.excerpt} -->
{/each}
</div>
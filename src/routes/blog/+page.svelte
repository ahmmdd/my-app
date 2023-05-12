<script>

  export let posts=[];
</script>

<h1>POC BLOGS</h1>
<ul>
  <li><a href="/">Back</a></li>
</ul>

{#each posts as post}
  <script>
    console.log(post.uri);
  </script>
  <h2>{post.title}</h2>
  <a href="{`/blog/${post.uri}`}">
    <h2>{post.title}</h2>
  </a>
  {@html post.excerpt}
{/each}

<!-- {#each posts as post, i}
	<li><a href="{`/blog${post.url}`}">
		{i + 1}: {post.title}
	</a></li>
{/each} -->
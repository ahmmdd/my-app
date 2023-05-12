<script>
    export let data;
    let { post } = data;
</script>
  
<h1>{post.title}</h1>
{@html post.content}
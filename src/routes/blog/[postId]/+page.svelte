<script>
	import Root from './../../../../.svelte-kit/generated/root.svelte';
	export let data;
	const { post } = data;
</script>

<div>
    <h2>{post.title}</h2>
    <p>{@html post.content}</p>
</div>
<!-- <style>
    :global(.has-text-align-center) {
        text-align: center;
    }
</style> -->


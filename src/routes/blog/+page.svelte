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


<!-- ERROR
  proxy.js?v=6d1aa2e5:15 [HMR][Svelte] Unrecoverable HMR error in <+page>: next update will trigger a full reload
logError @ proxy.js?v=6d1aa2e5:15
Proxy<+page> @ proxy.js?v=6d1aa2e5:380
construct_svelte_component_dev @ index.mjs:2398
update @ root.svelte:42
update_slot_base @ index.mjs:100
update @ layout.svelte?v=6d1aa2e5:40
update @ index.mjs:1347
flush @ index.mjs:1307
Promise.then (async)
schedule_update @ index.mjs:1258
make_dirty @ index.mjs:2133
(anonymous) @ index.mjs:2171
$$self.$$set @ root.svelte:45
(anonymous) @ proxy.js?v=6d1aa2e5:83
$set @ index.mjs:2272
dest.<computed> @ proxy.js?v=6d1aa2e5:46
navigate @ client.js?v=6d1aa2e5:1094
await in navigate (async)
(anonymous) @ client.js?v=6d1aa2e5:1558
Show 10 more frames
index.mjs:2374 Uncaught (in promise) Error: {#each} only iterates over array-like objects.
    at validate_each_argument (index.mjs:2374:15)
    at create_fragment (+page.svelte:8:13)
    at init (index.mjs:2180:37)
    at new Page (+page.svelte:3:23)
    at createProxiedComponent (svelte-hooks.js?v=6d1aa2e5:341:9)
    at new ProxyComponent (proxy.js?v=6d1aa2e5:242:7)
    at new Proxy<+page> (proxy.js?v=6d1aa2e5:349:11)
    at construct_svelte_component_dev (index.mjs:2398:26)
    at Object.update [as p] (root.svelte:42:41)
    at update_slot_base (index.mjs:100:14)
 -->
<script>
  
  let count = $state(0)
  const increment = () => {
    count += 1
  }
  let double = $derived(count * 2);

  $effect(() => {
    console.log('double count:', double)
  });

</script>

<button onclick={increment}>
  count is {count}
</button>

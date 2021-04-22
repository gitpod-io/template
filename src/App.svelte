<script>
	import ConcactCard from "./ConcactCard.svelte";

	export let name, age, data;
	$: upperName = name.toUpperCase();
	$: if (name == "vansh") {
		name = "Aloo Khake";
	}
	$: data = {
		title: "Hello",
		content: "DATA",
	};

	$: console.log("null Ljnsdnkdsknkdns");
</script>

<main>
	<h1>Hello {upperName} !</h1>
	<p>Age: {age}</p>
	<button on:click={() => (age += 1)}> Add Age </button>
	<!-- <button on:click="{() => name+=1}"></button> -->
	<input type="text" bind:value={name} />
<div class="card-items">
	<ConcactCard {...data} />
	<ConcactCard {...data} />
	<ConcactCard {...data} />
	<ConcactCard {...data} />
	<ConcactCard {...data} />
</div>
</main>

<style>
	:root {
		--text-primary: #eee4e7;
		--text-secondary: yellow;
		
	}
	input{
		background-color:blueviolet
	}
	* {
		color: var(--text-primary);
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}
	

	p {
		color: var(--text-secondary);
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--text-primary);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	button {
		width: clamp(50px, 100px, 120px);
		height: clamp(50px, 100px, 120px);
		background-color: #a35709;
	}
	.card-items{
		display:grid;
        grid-template-columns: auto auto auto;

	}
</style>

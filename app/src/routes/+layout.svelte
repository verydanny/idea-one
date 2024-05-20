<script lang="ts">
	import '../app.postcss'
</script>

<!-- App Shell -->
<div>
	<!-- App Bar -->
	<div>
		<a
			class="variant-ghost-surface btn btn-sm"
			href="https://discord.gg/EXqV7W8MtY"
			target="_blank"
			rel="noreferrer"
		>
			Discord
		</a>
		<a
			class="variant-ghost-surface btn btn-sm"
			href="https://twitter.com/SkeletonUI"
			target="_blank"
			rel="noreferrer"
		>
			Twitter
		</a>
		<a
			class="variant-ghost-surface btn btn-sm"
			href="https://github.com/skeletonlabs/skeleton"
			target="_blank"
			rel="noreferrer"
		>
			GitHub
		</a>
	</div>
	<!-- Page Route Content -->
	<slot></slot>
</div>

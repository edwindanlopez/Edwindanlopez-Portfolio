<style lang="postcss">
	.dropdown-item-light {
		@apply p-4 text-ashenMidContrast-light;
	}
</style>

<script lang="ts">
	export let itemHrefs: Record<string, string> = {
		hrefA: '',
		hrefB: '',
	};

	export const hrefItemA = itemHrefs.hrefA;
	export const hrefItemB = itemHrefs.hrefB;
</script>

<div class="w-52 shadow-2xl pt-6 pb-6 bg-white dark:text-edlLtGray dark:bg-edlCoolGray rounded-xl">
	<div class="group">
		<a
			href="{hrefItemA}"
			rel="external"
			data-sveltekit-preload-data="hover"
			class="w-full text-left"
		>
			<div
				class="{`dropdown-item-light hover:text-ashenHighContrast-light hover:bg-[#e0eaf0] dark:hover:bg-edlBrightBlue`}"
			>
				<slot name="dropdown-item-A" />
			</div>
		</a>
	</div>
	<div class="group">
		<a
			href="{hrefItemB}"
			rel="external"
			data-sveltekit-preload-data="hover"
			class="w-full text-left"
		>
			<div
				class="{`dropdown-item-light hover:text-ashenHighContrast-light hover:bg-[#e0eaf0] dark:hover:bg-edlBrightBlue`}"
			>
				<slot name="dropdown-item-B" />
			</div>
		</a>
	</div>
</div>

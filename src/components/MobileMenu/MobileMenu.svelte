<style lang="postcss">
	.mobile-nav-buttons {
		@apply block h-16 w-full mt-3 mb-3 p-3 border border-edlBrightBlue rounded-md bg-white;
	}
</style>

<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { isMobileMenuOpen } from '../../stores';
	import { fly } from 'svelte/transition';
	import transitionConfig from '../../utilities/transitions';

	import LayoutWrapper from '../shared/LayoutWrapper.svelte';

	const handleNavigate = (project: string): void => {
		goto(project);
		isMobileMenuOpen.update((val) => val);
	};

	$: shouldFlyIn = false;

	onMount(() => {
		shouldFlyIn = true;
		if (browser) {
			document.body.className = 'modal-open';
		}

		return () => document.body.removeAttribute('class');
	});
</script>

{#if shouldFlyIn}
	<div class="overlay-wrapper">
		<div
			class="absolute w-full h-screen -z-10"
			on:click="{() => {
				isMobileMenuOpen.update((val) => !val);
			}}"
		>
			<div id="mobile-menu" class="absolute sm:hidden w-full drop-shadow-2xl">
				<div
					in:fly="{transitionConfig(0, 75, 0, 0)}"
					out:fly="{transitionConfig(265, 75, 0, 0)}"
					class="mobile-menu-wrapper pt-10 pb-10 rounded-b-2xl flex justify-center items-center bg-[#acbac3] dark:bg-edlCoolSlate"
				>
					<LayoutWrapper>
						<div class="mobile-nav-items w-full flex flex-wrap">
							<a
								in:fly="{transitionConfig(0, 200, 0, -15)}"
								out:fly="{transitionConfig(0, 350, 0, -15)}"
								class="mobile-nav-buttons text-center dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								href="/edwindanlopez-resumé.pdf"
								target="_blank"
							>
								<h5 class="nav-item mt-1">Resumé</h5>
							</a>
							<button
								in:fly="{transitionConfig(25, 230, 0, -15)}"
								out:fly="{transitionConfig(0, 300, 0, -15)}"
								class="mobile-nav-buttons dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								on:click="{() => handleNavigate(`/#web-dev`)}"
							>
								<h5 class="nav-item">Front-end Dev</h5>
							</button>
							<button
								in:fly="{transitionConfig(35, 260, 0, -15)}"
								out:fly="{transitionConfig(0, 260, 0, -15)}"
								class="mobile-nav-buttons dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								on:click="{() => handleNavigate(`/#web-design`)}"
							>
								<h5 class="nav-item">Web Design</h5>
							</button>
							<button
								in:fly="{transitionConfig(45, 300, 0, -15)}"
								out:fly="{transitionConfig(0, 230, 0, -15)}"
								class="mobile-nav-buttons dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								on:click="{() => handleNavigate(`/#about`)}"
							>
								<h5 class="nav-item">About</h5>
							</button>
							<button
								in:fly="{transitionConfig(55, 350, 0, -15)}"
								out:fly="{transitionConfig(0, 200, 0, -15)}"
								class="mobile-nav-buttons dark:bg-edlDeepBlue dark:focus:bg-edlCoolSlate"
								on:click="{() => handleNavigate(`/#contact`)}"
							>
								<h5 class="nav-item">Contact</h5>
							</button>
						</div>
					</LayoutWrapper>
				</div>
			</div>
		</div>
	</div>
{/if}

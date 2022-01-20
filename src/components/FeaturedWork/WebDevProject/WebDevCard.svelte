<script lang="ts">
	import { colors } from '../../../stores';
	import Icon from '../../shared/Icon.svelte';
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import OpenLinkIcon from '$lib/icons/OpenLinkIcon.svelte';
	import Modal, { getModal } from '../../shared/Modal.svelte';
	import TableCallout from '../../shared/TableCallout/index.svelte';
	import type { DevProjectTypes } from '../../../../types/ComponentTypes';

	export let devProjectProps: Omit<DevProjectTypes, 'coverImage' | 'coverImageAlt'>;

	export let { title, subhead, description, excerpt, techStack, gitHubLink, projectLink } =
		devProjectProps;

	const rows = [0, 1]; // num rows (2)
	const devCardTblData = [
		{
			tech1: 'HTML & CSS',
			tech2: 'Javascript',
			tech3: 'React',
		},
		{
			tech1: 'Tailwindcss',
			tech2: 'Emotion',
			tech3: 'Styled Components',
		},
	];
</script>

<div
	class="bg-gray-100 p-6 shadow-2xl lg:shadow-none rounded-b-lg sm:rounded-lg sm:p-12 lg:rounded-l-none dark:bg-edlDeepBlue h-full flex justify-center items-center">
	<div>
		<h4 class="text-edlDeepBlue dark:text-ashenHighContrast-dark">
			{title}
		</h4>
		<p class="sm-title mt-1 mb-8 text-ashenMidContrast-light">
			{subhead}
		</p>
		<span>
			<a href="{gitHubLink}" target="_blank" rel="external" class="inline-block">
				<span class="flex">
					<Icon
						strokeColor="{$colors.midBlue}"
						fillColor="#2f75d6"
						width="32"
						height="32"
						name="github-icon"
						svgClass="inline-block">
						<GithubIcon />
					</Icon>
					<p
						class="font-niveauGrotesk font-medium text-sm mt-[2px] -ml-1 slide-left-right dark:hover:text-edlBrightBlue">
						View GitHub
					</p>
				</span>
			</a>
			<a href="{projectLink}" target="_blank" rel="external" class="inline-block ml-8">
				<span class="flex">
					<Icon
						strokeColor="{$colors.midBlue}"
						fillColor="transparent"
						width="32"
						height="32"
						name="open-link-icon"
						svgClass="inline-block">
						<OpenLinkIcon />
					</Icon>
					<p
						class="font-niveauGrotesk font-medium text-sm mt-[2px] -ml-1 slide-left-right dark:hover:text-edlBrightBlue">
						View Site
					</p>
				</span>
			</a>
		</span>
		<span class="mt-3 mb-8 block">
			<p id="dev-card-excerpt" class="inline text-[0.95rem] leading-[1.35rem] mr-2">
				{excerpt}
			</p>
			<button on:click="{() => getModal(title).open()}"
				><p class="text-sm text-edlMidBlue dark:text-edlBrightBlue slide-left-right">
					Read more...
				</p></button>
		</span>

		<!--Modal Start-->
		<Modal bind:id="{title}">
			<h4 class="text-edlDeepBlue dark:text-ashenHighContrast-dark">
				{title}
			</h4>
			<p class="sm-title mt-1 mb-8">
				{subhead}
			</p>
			<p id="dev-card-content" class="text-[0.95rem] leading-[1.35rem]">
				{description}
			</p>
		</Modal>
		<!--Modal End-->

		<p class="sm-title font-sans font-bold mb-2 tracking-wider">Technologies Used</p>
		<TableCallout
			tblClass="callout-table"
			tblTdClass="bg-white dark:bg-edlCoolSlate"
			tableData="{techStack}"
			showCols="{false}" />
	</div>
</div>
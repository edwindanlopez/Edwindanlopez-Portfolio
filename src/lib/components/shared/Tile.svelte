<script lang="ts">
	import type { WebDesignProject } from '$lib/types/projectTypes.js';
	import imageUrlBuilder from '@sanity/image-url';
	import client from '../../../sanityClient';

	export let webDesignProject: WebDesignProject = {
		title: '',
		coverImage: {
			alt: '',
			asset: {
				_ref: '',
				_type: '',
			},
		},
		slug: {
			current: '',
			_type: '',
		},
	};

	const builder = imageUrlBuilder(client);
	let { title, coverImage, slug } = webDesignProject;

	function urlFor(source: { _ref: string; _type: string }) {
		return builder.image(source);
	}
</script>

<div class="sm:mb-2 sm:mt-2">
	<a href="{`/web-design/${slug.current}`}" data-sveltekit-preload-data="hover" class="col-span-1">
		<div class="overlay-wrapper relative overflow-hidden rounded-md">
			<div
				class="absolute w-full h-full group hover:bg-[rgba(0,0,0,0.5)] flex justify-center items-center"
			>
				<p
					class="hidden group-hover:block animate-pulse font-niveauGrotesk font-bold uppercase tracking-[5px] text-2xl text-white"
				>
					View More
				</p>
			</div>
			<img
				src="{urlFor(coverImage.asset).format('webp').url()}"
				srcset="{`
				${urlFor(coverImage.asset).width(640).format('webp').url()} 640w, 
				${urlFor(coverImage.asset).width(768).format('webp').url()} 768w, 
				${urlFor(coverImage.asset).width(1024).format('webp').url()} 1024w, 
				${urlFor(coverImage.asset).width(1280).format('webp').url()} 1280w, 
				${urlFor(coverImage.asset).width(1536).format('webp').url()} 1536w, 
				${urlFor(coverImage.asset).width(2000).format('webp').url()} 2000w, 
			`}"
				alt="{coverImage.alt}"
				loading="lazy"
				width="100%"
				height="100%"
				class="aspect-video object-cover object-center shadow-md"
			/>
		</div>
		<p
			class="mt-2 text-base font-medium text-edlDeepBlue slide-left-right dark:text-ashenMidContrast-dark dark:hover:text-edlBrightBlue"
		>
			{title}
		</p>
	</a>
</div>

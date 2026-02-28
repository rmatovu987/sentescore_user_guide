// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SenteScore Docs',
			description: 'Official user guide for SenteScore — Intelligent Credit Scoring & Workflow Automation',
			favicon: '/favicon.svg',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/sentescore' },
				{ icon: 'x.com', label: 'Twitter', href: 'https://twitter.com/sentescore' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/sentescore' },
			],
			sidebar: [
				{
					label: '🚀 Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' }
					],
				},
				{
					label: '⚡ Credit Scoring Apps',
					items: [
						{ label: 'View Applications', slug: 'credit_scoring/view-applications' },
						{ label: 'Create Application', slug: 'credit_scoring/create-application' },
						{ label: 'Modify Application', slug: 'credit_scoring/modify-application' },
						{ label: 'Application Details', slug: 'credit_scoring/application-detail' },
					],
				},
				{
					label: '📋 Workflow Applications',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' }
					],
				},
				{
					label: '📊 Audit Logs',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' }
					],
				},
				{
					label: '⚙️ Settings',
					items: [
						{ 
							label: 'Business Settings',
							items: [
								{ label: 'Branches', slug: 'getting-started/introduction' },
								{ label: 'Roles', slug: 'getting-started/introduction' },
								{ label: 'Invitations', slug: 'getting-started/introduction' },
								{ label: 'Users', slug: 'getting-started/introduction' },
							]
						},
						{ 
							label: 'Credit Scoring Settings',
							items: [
								{ label: 'Field Definittions', slug: 'getting-started/introduction' },
								{ label: 'Credit Scoring Rules', slug: 'getting-started/introduction' },
								{ label: 'Document Types', slug: 'getting-started/introduction' },
							]
						},
						{ 
							label: 'Workflow Settings',
							items: [
								{ label: 'Workflows', slug: 'getting-started/introduction' },
							]
						},
					],
				},
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});

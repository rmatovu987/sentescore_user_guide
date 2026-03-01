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
						{ label: 'View Scoring Applications', slug: 'credit_scoring/view-applications' },
						{ label: 'Create Scoring Application', slug: 'credit_scoring/create-application' },
						{ label: 'Modify Scoring Application', slug: 'credit_scoring/modify-application' },
						{ label: 'Scoring Application Details', slug: 'credit_scoring/application-detail' },
					],
				},
				{
					label: '📋 Workflow Applications',
					items: [
						{ label: 'View Workflow Applications', slug: 'workflow_applications/view-applications' },
						{ label: 'Create Workflow Application', slug: 'workflow_applications/create-application' },
						{ label: 'Modify Workflow Application', slug: 'workflow_applications/modify-application' },
						{ label: 'Workflow Application Details', slug: 'workflow_applications/application-detail' },
					],
				},
				{
					label: '📊 Audit Logs',
					items: [
						{ label: 'View Audit Logs', slug: 'audit_logs/view-audit-logs' }
					],
				},
				{
					label: '⚙️ Settings',
					items: [
						{
							label: 'Business Settings',
							items: [
								{
									label: 'Branches',
									items: [
										{ label: 'View Branches', slug: 'settings/business/branches/view-branches' },
										{ label: 'Create Branch', slug: 'settings/business/branches/create-branch' },
										{ label: 'Modify Branch', slug: 'settings/business/branches/modify-branch' },
										{ label: 'Branch Details', slug: 'settings/business/branches/view-branch' },
									]
								},
								{
									label: 'Roles',
									items: [
										{ label: 'View Roles', slug: 'settings/business/roles/view-roles' },
										{ label: 'Create Role', slug: 'settings/business/roles/create-role' },
										{ label: 'Modify Role', slug: 'settings/business/roles/modify-role' },
										{ label: 'Role Details', slug: 'settings/business/roles/view-role' },
									]
								},
								{
									label: 'Invitations',
									items: [
										{ label: 'View Invitations', slug: 'settings/business/invitations/view-invitations' },
										{ label: 'Create Invitation', slug: 'settings/business/invitations/create-invitation' },
										{ label: 'Invitation Details', slug: 'settings/business/invitations/view-invitation' },
									]
								},
								{
									label: 'Users',
									items: [
										{ label: 'View Users', slug: 'settings/business/users/view-users' },
										{ label: 'User Details', slug: 'settings/business/users/view-user' },
									]
								},
							]
						},
						{
							label: 'Credit Scoring Settings',
							items: [
								{
									label: 'Field Definitions',
									items: [
										{ label: 'View Field Definitions', slug: 'settings/scoring/field-definitions/view-field-definitions' },
										{ label: 'Field Definition Details', slug: 'settings/scoring/field-definitions/view-field-definition' },
										{ label: 'Create Field Definition', slug: 'settings/scoring/field-definitions/create-field-definition' },
										{ label: 'Modify Field Definition', slug: 'settings/scoring/field-definitions/edit-field-definition' },
									]
								},
								{
									label: 'Credit Scoring Rules',
									items: [
										{ label: 'View Credit Scoring Rules', slug: 'settings/scoring/scoring-rules/view-rules' },
										{ label: 'Credit Scoring Rule Details', slug: 'settings/scoring/scoring-rules/view-rule' },
										{ label: 'Create Credit Scoring Rule', slug: 'settings/scoring/scoring-rules/create-rule' },
										{ label: 'Modify Credit Scoring Rule', slug: 'settings/scoring/scoring-rules/edit-rule' },
									]
								},
								{
									label: 'Document Types',
									items: [
										{ label: 'View Document Types', slug: 'settings/scoring/document-types/view-types' },
										{ label: 'Document Type Details', slug: 'settings/scoring/document-types/view-type' },
										{ label: 'Create Document Type', slug: 'settings/scoring/document-types/create-type' },
										{ label: 'Modify Document Type', slug: 'settings/scoring/document-types/edit-type' },
									]
								},
							]
						},
						{
							label: 'Workflow Settings',
							items: [
{
									label: 'Workflows',
									items: [
										{ label: 'View Workflows', slug: 'settings/workflows/view-workflows' },
										{ label: 'Workflow Details', slug: 'settings/workflows/view-workflow' },
										{ label: 'Create Workflow', slug: 'settings/workflows/create-workflow' },
										{ label: 'Modify Workflow', slug: 'settings/workflows/edit-workflow' },
									]
								},							]
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

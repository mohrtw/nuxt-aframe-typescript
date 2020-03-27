import ConfigWebpackPlugin from 'config-webpack';

export default {
	head: {
		title: 'Nuxt Typescript',
        description: 'Testing using Nuxt with Typescript',
    },

    styleResources: {
		scss: [
			'components/**/*.scss',
		]
	},


	buildModules: ['@nuxt/typescript-build'],
    
	build: {
        babel: {
			presets: ['@babel/preset-env'],
			plugins: [
				'@babel/transform-runtime'
			],
			babelrc: true
        },
        plugins: [
			new ConfigWebpackPlugin(),
		],
    },

    plugins: [
		{
			src: './plugins/vue-aframe.ts',
			mode: 'client'
		}
    ],
}
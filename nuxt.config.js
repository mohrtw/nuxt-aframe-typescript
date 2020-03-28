import ConfigWebpackPlugin from 'config-webpack';

export default {
	server: {
		port: 3003, // default: 3000
		// host: '0.0.0.0' // default: localhost
	},

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
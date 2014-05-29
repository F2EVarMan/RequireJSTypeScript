module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

		ts: {

			main: {
				src: ['src/**/*.ts'],
				outDir:'bin/js',
				options: {
					target: 'es5',
					sourcemap: false,
					declaration: false,
					comments: false,
					module: 'amd'
				}
			}
		},

		watch: {
			main: {
				files: ['**/*.ts'],
				tasks: ['ts:main' ],
				options: {
					spawn: false
				}
			}

		}

    });

	grunt.registerTask('export', 		[ 'ts:main' ]);
	grunt.registerTask('watch-main', 	[ 'watch:main' ]);


};
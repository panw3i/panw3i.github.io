module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'dest/js'
                }]
            }
        },
        concat : {
            css : {
                src: ['src/asset/*.css'],
                dest:'dest/asset/all.css'
            }
        },
        cssmin: {
            css: {
                src:'dest/asset/all.css',
                dest:'dest/asset/all-min.css'
            }
        }
    });
    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    // 默认任务
    grunt.registerTask('default', ['uglify','concat','cssmin']);
}
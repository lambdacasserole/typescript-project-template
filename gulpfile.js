// Gulp core.
var gulp = require("gulp");

var del = require("del"); // File deletion.
var ts = require("gulp-typescript"); // TypeScript compiler.
var td = require("gulp-typedoc"); // TypeDoc documentation generator.


// Source file directory.
const SRC_DIR = "./src";

// Directory for output files.
const DIST_DIR = "./dist";

// Load TypeScript configuration file.
var project = ts.createProject("tsconfig.json");

// Generate project documentation.
gulp.task("docs", function() {
    return gulp
        .src(["src/*.ts"])
        .pipe(td({
            name: "typescript-project-template", // TODO: Update according to project.
            theme: "default", // TODO: Change to "minimal" for single-page docs (nice for smaller projects).
            mode: "modules",
            out: "./docs",
            externalPattern: "**/node_modules/**",
            excludeExternals: true
        }))
    ;
});

// Remove dist folder to clean.
gulp.task("clean", function () {
  return del([DIST_DIR]);
});

// Compile TypeScript.
gulp.task("build", function () {
  return project.src()
    .pipe(project())
    .js.pipe(gulp.dest(DIST_DIR));
});

// Watch task.
gulp.task("watch", function () {
  gulp.watch([SRC_DIR + "/**/*.ts"], gulp.series("build"));
});

// Default gulp task.
gulp.task("default", gulp.series("clean", "build", "docs"));

// Gulp core.
var gulp = require("gulp");

var del = require("del"); // File deletion.
var ts = require("gulp-typescript"); // TypeScript compiler.
var td = require("gulp-typedoc"); // TypeDoc documentation generator.


// Source directory/files.
const SRC_DIR = "./src";
const SRC_FILES = SRC_DIR + "/**/*.ts";

// Directory for output files.
const DIST_DIR = "./dist";

// Directory for generated documentation.
const DOCS_DIR = "./docs";

// Load TypeScript configuration file.
var project = ts.createProject("tsconfig.json");

// Generate project documentation.
gulp.task("docs", function() {
    return gulp
        .src([SRC_FILES])
        .pipe(td({
            name: "typescript-project-template", // TODO: Update according to project.
            theme: "default", // TODO: Change to "minimal" for single-page docs (nice for smaller projects).
            mode: "modules",
            out: DOCS_DIR,
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
  gulp.watch([SRC_FILES], gulp.series("build"));
});

// Default gulp task.
gulp.task("default", gulp.series("clean", "build", "docs"));

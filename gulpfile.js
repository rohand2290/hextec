const { src, dest } = require("gulp");
copy = (cb) => {
  src("src/bin/template**/*").pipe(dest("dist/bin/"));
  cb();
};

exports.copy = copy;

/* Compatibility loader for the split TATER data files.
   Prefer loading the files in /data directly on pages. */
(function () {
  var scripts = [
  "data/init.js",
  "data/site.js",
  "data/companies.js",
  "data/leadership.js",
  "data/founder.js",
  "data/csr.js",
  "data/news.js"
];
  scripts.forEach(function (src) {
    document.write('<script src="' + src + '"><\/script>');
  });
})();

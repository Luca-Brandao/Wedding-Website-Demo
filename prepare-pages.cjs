const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname);
const source = path.resolve(root, process.argv[2] || "dist");
const output = path.join(root, "docs");
if (!source.startsWith(root + path.sep) || path.dirname(output) !== root || source === output) {
  throw new Error("The source and generated output must be inside this project.");
}
if (!fs.existsSync(path.join(source, "index.html"))) throw new Error("Build the site before preparing Pages.");
// docs is generated output. Original project sources are never modified.
fs.rmSync(output, { recursive: true, force: true });
fs.cpSync(source, output, { recursive: true });
const policy = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'";
const index = path.join(output, "index.html");
const html = fs.readFileSync(index, "utf8").replace(/<head([^>]*)>/i, `<head$1><meta http-equiv="Content-Security-Policy" content="${policy}"><meta name="referrer" content="no-referrer">`);
fs.writeFileSync(index, html);
fs.writeFileSync(path.join(output, ".nojekyll"), "\n");
// _headers is a different host's configuration, not a GitHub Pages control.
const otherHostHeaders = path.join(output, "_headers");
if (fs.existsSync(otherHostHeaders)) fs.unlinkSync(otherHostHeaders);
console.log("Prepared GitHub Pages output in docs/");

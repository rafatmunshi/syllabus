/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const glob = require("glob-promise");
const path = require("path");
const fs = require("fs-extra");

// quick fix for GH pages trailing slash issues
// /myDoc/index.html => /myDoc.html
async function generateSimpleHtmlFiles(outDir) {
  // Docusaurus generates a index.html files based on the markdown file
  // structure. For example, for the foo/bar/baz.md file, a
  // foo/bar/baz/index.html file is generated.

  // To workaround a problem with trailing slashes, we also copy the index.html
  // file to another HTML file based on the markdown file name. For example, for
  // the foo/bar/baz.md file, a foo/bar/baz.html file is copied from the
  // foo/bar/baz/index.html (see above).

  // Create a glob pattern to select all the generated index.html files
  const pattern = path.join(outDir, "/**/index.html");

  // Get the file paths for all index.html files (ignoring a root index.html
  // file)
  const filePathsForIndexes = (await glob(pattern)).filter((filePath) => {
    return filePath !== path.join(outDir, "/index.html");
  });

  await Promise.all(
    filePathsForIndexes.map(async (filePathForIndex) => {
      if ((await fs.stat(filePathForIndex)).isDirectory()) {
        return;
      }

      // Make a HTML file path based on the directory name. For example, for the
      // foo/bar directory, make a file path foo/bar.html
      const filePathForDir = `${path.dirname(filePathForIndex)}.html`;

      if (await fs.pathExists(filePathForDir)) {
        // The file based on the directory name already exists, so skip
      } else {
        // Copy the file based on the index.html file to the file path based on
        // the directory. For example, copy foo/bar/index.html to foo/bar.html
        await fs.copyFile(filePathForIndex, filePathForDir);
      }
    })
  );
}

module.exports = function () {
  console.log("site plugin");
  return {
    plugin: "site-plugin",
    async postBuild(props) {
      await generateSimpleHtmlFiles(props.outDir);
    },
  };
};

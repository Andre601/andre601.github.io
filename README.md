# Personal Website

<a href="https://jekyllrb.com" target="_blank">
  <img alt="jekyll" height="64" align="right" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@2/assets/cozy/built-with/jekyll_vector.svg">
</a>

> **Note**  
> This Repo has moved! New location: https://codeberg.org/Andre601/website

This repository contains all the content used for my [personal website][website].

A [GitHub Action][action] is used whenever changes are pushed towards the [site directory][site-directory] in which case it will automatically push changes to the [site branch] which is used by GitHub Pages to publish the site.

## Credits

The website is built using [Jekyll] and uses the [minimal mistakes] theme for styling.  
[`peaceiris/actions-gh-pages`][gh-pages action] is used to push changes to the site directory for publication.

<!-- Links -->
[website]: https://andre601.ch
[action]: https://github.com/Andre601/andre601.github.io/blob/development/.github/workflows/publish.yml
[site-directory]: https://github.com/Andre601/andre601.github.io/tree/development/site
[site branch]: https://github.com/Andre601/andre601.github.io/tree/site
[jekyll]: https://jekyllrb.com
[minimal mistakes]: https://mmistakes.github.io/minimal-mistakes/
[gh-pages action]: https://github.com/peaceiris/actions-gh-pages

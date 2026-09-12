# alfonso mcentire

essays and fragments, typed. astro, static, deployed to github pages via
actions.

## run it

```bash
npm install
npm run dev      # localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/ locally, base path included
```

## writing

| put a file in | to get |
|---|---|
| `src/essays/*.md` | a page at `/essays/<filename>`, listed on the front page |
| `src/fragments/*.md` | a dated block on the single `/fragments` page |

essay frontmatter:

```yaml
---
title: required
date: 2026-09-11          # required, orders the contents page
standfirst: one sentence. # optional, under the title and in the feed
series: optional
tags: [optional]
draft: false              # true keeps it off the contents page and out of the feed
---
```

fragment frontmatter is `date` (required) and `title` (optional).

the schema in `src/content.config.ts` is enforced at build time. a bad date
or a missing title fails the build instead of producing a broken index.

## how to type

the site renders markdown the way a manual typewriter would have. these are
the conventions:

| you type | it becomes |
|---|---|
| `_underlined_` or `*underlined*` | underlined. there are no italics. |
| `**double-struck**` | the same weight, overtyped slightly darker. no bold. |
| `~~mistake~~` | a row of x's typed over the word |
| `--` | stays `--`. no em dashes. |
| `"quotes"` | stay straight. nothing is smartened. |
| `* * *` on its own line | a section break |
| `> quoted` | indented five spaces, nothing else |
| `## heading` | same size, underlined |

everything is one size. titles are set apart by whitespace and an underline,
not by scale.

## the alter ego

`src/site.ts` holds the pen name, the second masthead line, and the epigraph
that opens the front page. the footer says the name is a pen name -- keep
that or remove it, but decide on purpose.

the git commit author is a separate question from the pen name. `git config
user.name` and `user.email` in this repo control what shows on github's
commit history.

## deploying

push to `main`. `.github/workflows/deploy.yml` builds and deploys.

one-time setup in the repo: settings -> pages -> source -> github actions.

## renaming the repo to `jikjii.github.io`

gets you `https://jikjii.github.io` instead of a doubled path.

1. settings -> general -> rename to `jikjii.github.io`
2. in `astro.config.mjs`, delete the `base` line
3. `git remote set-url origin git@github.com:jikjii/jikjii.github.io.git`

every internal link goes through `href()` in `src/site.ts`, which reads
`import.meta.env.BASE_URL`, so nothing else changes.

## custom domain

add `public/CNAME` containing the bare domain, point a cname record at
`jikjii.github.io`, enable https under settings -> pages. drop `base` as
above.

## where the design lives

all of it is `src/styles/global.css`. four colours, one typeface, one size.

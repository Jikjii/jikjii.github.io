# alfonso mcentire
 
essays and fragments, typed. live at https://jikjii.github.io
 
astro, static, one typeface at one size, deployed by github actions on
every push to `main`.
 
## run it
 
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/ locally
```
 
## writing
 
| put a file in | to get |
|---|---|
| `src/essays/<slug>.md` | a page at `/essays/<slug>`, listed on the front page |
| `src/fragments/<date>.md` | a dated block on the single `/fragments` page |
 
the filename is the url. rename a published piece and every link to it
breaks.
 
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
 
fragment frontmatter is `date` (required) and `title` (optional). most
fragments should not have a title.
 
the schema in `src/content.config.ts` is enforced at build time. a bad
date or a missing title fails the build instead of quietly producing a
broken index.
 
## how to type
 
the site renders markdown the way a manual typewriter would have.
 
| you type | it becomes |
|---|---|
| `_this_` or `*this*` | underlined. there are no italics. |
| `**this**` | the same weight, struck twice so it comes out darker. no bold. |
| `~~this~~` | a row of x's typed over the word |
| `--` | stays `--`. no em dashes. |
| `"this"` | stays straight. nothing is smartened. |
| `* * *` on its own line | a section break |
| `> this` | indented five spaces, nothing else |
| `## this` | same size as the text, underlined |
 
everything is one size. a title is set apart by whitespace and an
underline, not by scale. paragraphs are separated by a blank line and
never indented. lines run sixty-five characters.
 
## house rules
 
these are for the writer, not the reader. the reader gets the page.
 
- write what is in front of you. the day job, the commute, the code, the
  apartment, the things built that nobody asked for. specifics or nothing.
  a piece with attitude and no concrete nouns gets deleted.
- no consolation and no sermon. the reader is not the target. write it
  true from where you sit and the right people will find it.
- fragments are the night register: short, no argument, dated. essays are
  the view from a distance: an argument that finds the reader's line,
  crosses it, and brings them back glad they came. a piece that only
  disturbs is a tantrum. a piece that only argues is a tract.
- do not resolve the slide between enduring it and watching it. write the
  slide.
- the writers this owes something to are never named on the site. if it
  is working, people will hear them anyway.
- `draft: true` until it is done. nothing goes up half-typed.
## the alter ego
 
`src/site.ts` holds everything about the name:
 
| field | what it does |
|---|---|
| `title` | the masthead, the tab title, the feed name |
| `place` | the second masthead line. currently `address withheld`. |
| `epigraph` | the first thing on the front page. one line. |
| `description` | meta description and feed subtitle |
 
the footer says the name is a pen name. keep it or cut it, but decide on
purpose -- it is the difference between a persona and a deception.
 
the git commit author is separate from the pen name. `git config
user.name` and `user.email` in this repo control what github shows in the
history. the site and the commit log are two different identities and
can be set independently.
 
## deploying
 
push to `main`. `.github/workflows/deploy.yml` builds and deploys. about
a minute from push to live.
 
repo settings -> pages -> source is set to **github actions**. if that
ever gets flipped back to "deploy from a branch", the workflow will run
green and its output will be thrown away.
 
the feed is at `/rss.xml`. browsers show it as raw xml, which is correct
-- it is for feed readers, not people. the `<link rel="alternate">` in the
page head lets readers auto-discover it, so the nav link is optional.
 
## custom domain
 
add `public/CNAME` containing only the bare domain, point a cname record
at `jikjii.github.io` plus the four github pages `A` records at the apex,
then settings -> pages -> custom domain and enforce https.
 
## where the design lives
 
all of it is `src/styles/global.css`. four colours, one typeface, one
size. the layout is `src/layouts/Base.astro`. that is the whole visual
system and it should stay that small.
 

---
title: 2nd post
date: 2022-11-29 10:41:48
tags:
---
This is the 2nd blog.
## How to edit the new source document created by:
`hexo new "title"`
is:
Open the post document with VS Code in:
`source\_posts` folder.
You can check if it's the proper file by the file starts like:

```
---
title: 2nd post
date: 2022-11-29 10:41:48
tags:
---
```
After editing it, let Hexo to generate a static HTML document:
`hexo generate`

Then, update the remote Git:
```
git add .
git commit -m 'update'
git push
```

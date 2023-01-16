---
title: 2nd post
date: 2022-11-29 11:23:48
tags:
---
This is the 2nd blog.
## How to edit the new source document created by *hexo new* command:
`hexo new "title"`
is:
Open the post document with VS Code in:
`source\_posts` folder. It's name is added with extension '.md'.
Also, you can check if it's the proper file by the file starts like:

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
## Fix own timezone:
- Search in Hexo folder 'timezone'
- Fix '-0000' as '*CountryName*'
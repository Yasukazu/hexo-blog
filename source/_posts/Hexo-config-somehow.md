---
title: Hexo config url and public_dir and document-root settings
date: 2023-01-15 17:43:00
tags:
---
# Hexo assumes its generated website is accessed as 'URL/dir'

## Configuration file
A typical usecase is `www.example.com/blog`.
So, about `_config.yml`, last path of `url` and `public_dir` must be the same. 

## How to set the hexo-generated website with 'document root' in a VPS
1. In the same directory where document root exists, clone the hexo website repository.(repository name as `hexo-blog`)
2. Make a symbolic link of `hexo-blog/blog` into the document root as `blog`

```bash
[DocumentRoot]$ ln -s hexo-blog/blog /blog
```

3. Make a symbolic link of `hexo-blog/blog/index.html` into the document root as `index.html`
# hexo-html-prettify ![Publish on NPM](https://github.com/sergeyzwezdin/hexo-html-prettify/workflows/Publish%20on%20NPM/badge.svg) ![](https://img.shields.io/npm/v/hexo-html-prettify)

`hexo-html-prettify` is a plugin for Hexo static site generator that tidies up output HTML markup.

* **Tidies up** the output HTML markup on the fly.
* Uses [`js-beautify`](https://beautifier.io) underneath. It's possible to use all power of this library to beautify HTML markup.
* **Easy to use**. Just install it and it will start working.
* **Customizable**. You will be able to change every setting of `js-beauty` minifier.

## How it works

Once Hexo build HTML page, the plugin runs `js-beautify` to cleanup output HTML. Easy! 🤓

## Requirements
- Hexo: 4.x
- Node 12+

## Usage

1. Install the plugin using npm:
```bash
$ npm install hexo-html-prettify --save-dev
```
2. After installation the plugin will start working with default settings, but if you need you can add `html_prettify` parameter to Hexo configuration file (see configuration description below).
3. Build your website and enjoy! 🔥

## Configuration

To configure the plugin add `html_prettify` key to the Hexo config file. For example:

```yaml
html_prettify:
    enable: true
    exclude:
        - "*/**/test"
    options:
        indent_size: 2
        indent_char: " "
        max_preserve_newlines: "-1"
        preserve_newlines: false
        keep_array_indentation: true
        break_chained_methods: false
        indent_scripts: normal
        brace_style: expand
        space_before_conditional: true
        unescape_strings: false
        jslint_happy: true
        end_with_newline: true
        wrap_line_length: "0"
        indent_inner_html: false
        comma_first: false
        e4x: false
        indent_empty_lines: false
```

| Key | Required | Default value | Description |
| --- | --- | --- | --- |
| `enable` | `false` | `true` | Enable/disable output HTML prettifying. |
| `exclude` | `false` | empty | Array of paths that should be excluded from processing. |
| `options` | `false` | | Options object that will be passed to `js-beautify` during processing. You can generate your settings using [this online tool](https://beautifier.io/). |

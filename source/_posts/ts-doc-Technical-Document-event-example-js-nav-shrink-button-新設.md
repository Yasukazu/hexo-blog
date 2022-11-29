---
title: ts-doc(Technical Document) event-example.js nav-shrink button 新設
date: 2022-11-29 15:39:55
tags: js HTML nav
---
## 初期値の設定(CSSで定義されている変数の読み込み)
``` js
const cbody = getComputedStyle(document.querySelector('body'));
const nav_h = cbody.getPropertyValue("--nav-h");
const nav_h_2 = cbody.getPropertyValue("--nav-h-2");
const nav_w = cbody.getPropertyValue("--nav-w");
const nav_w_2 = cbody.getPropertyValue("--nav-w-2");
const nav_expand_button = document.querySelector("button#nav-expand");
const nav_shrink_button = document.querySelector("button#nav-shrink");
const pc_media = "(min-width: 540px)";
const dbody = document.querySelector('body').style;
```
## 拡大ボタン関数
```
nav_expand_button.onclick = () => {
  const isPC = window.matchMedia(pc_media).matches;
  const dst = "--nav-" + (isPC ? 'w' : 'h');
  const src_val = isPC ? nav_w : nav_h;
  dbody.setProperty(dst, src_val);
}
```
## 縮小ボタン関数
```
nav_shrink_button.onclick = () => {
  const isPC = window.matchMedia(pc_media).matches;
  const dst = "--nav-" + (isPC ? 'w' : 'h');
  const src_val = isPC ? nav_w_2 : nav_h_2;
  dbody.setProperty(dst, src_val);
}
```
(TODO:):現状では、拡大/縮小ボタンが押されるたびに規定値への書き込みを行っているが、 状態を記憶しておいて、すでに縮小しているのなら即リターンすれば無駄な計算資源を使わなくて済む。
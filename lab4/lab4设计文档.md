# lab4设计文档

![](images\Index_Screenshot.jpg)

## 导航栏

使用了`navbar`组件和`.navbar-inverse`反色。
其中My account栏使用了`dropdown`组件。

## 滚动头图

使用了`carousel`插件。
为了使每张图active时大小一致，在插件的`item`项里使用了一个固定大小的`.photo-box`容纳图片。图片设置了`object-fit: cover`的CSS属性使得任意大小的原图都能保持固定大小而不变形。

## 页脚

与样例一致。补充了图标和二维码。
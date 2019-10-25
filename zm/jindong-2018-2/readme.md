##
SEO:浏览器会爬取html的内容，为了SEO我们放文字，为了美观，放图片
场景：网站的logo
important
style (1000)
id (100)
class (10)
元素/伪元素(*) (1)
#box span .active 111
#box span 101
同等 优先级 后出现覆盖先出现的

```css
.red{color:red}
.blue{color:blue}
<span class="blue red">122</span>
```

## animation-fill-mode
forwards:  
none:
backwrads: 动画开始前，将元素的样式设为动画的第一帧的样式
both: forwards + backwrads
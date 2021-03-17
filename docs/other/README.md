# MarkDown
### how to use markdown

### 一、标题
```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```
    
### 二、强调
可使用星号* 或 下划线_
```markdown
*这是倾斜的文字*
**这是加粗的文字**
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```

### 三、列表
有序列表
```
1. 有序列表的第一项
2. 另外一个项
```
无序列表 (可以使用 * 或 - 或 +)
```
* 无序列表
    * 无序列表
    - 无序列表
    + 无序列表
```

### 四、引用
在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>>n
```markdown
> 在邮件中块引用中很方便用来仿真文本的回复。
> 这行是同一个块的一部分。

引用结束

> 可以*在*块引用中使用其它**Markdown**。
```
   
### 五、分割线

    三个或者更多...
    
    ---
    
    连字符
    
    ***
    
    星号
    
    ___
    
    下划线
    
### 六、图片
```markdown
这是我们的logo（停留查看标题）

内嵌式
![alt text](http://placehold.jp/150x150.png "Title Text 1")

引用式
![alt text][logo]

[logo]: http://placehold.jp/150x150.png "Title Text 2"
```

### 七、链接
```markdown
[内嵌式链接](https://www.google.com)

[带标题的内嵌式链接](https://www.google.com "谷歌的主页")

[引用式链接][谷歌]

[带标题的引用式链接][百度]

[相对引用一个库文件](../blob/master/LICENSE)

[谷歌]: https://www.google.com
[百度]: http://baidu.com "百度"
```

### 八、表格
```markdown
冒号可以用来对其列。

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

The outer pipes (|) are optional, 
and you don't need to make the raw Markdown line up prettily. 
You can also use inline Markdown.

外部的管道符 (|) 是可选的，而且不需要优雅的排列Markdown。你还可以在表格中内嵌其他Markdown。

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

### 九、HTML
You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

你同样可以在Markdown中使用HTML，并且它能很好的工作。
```html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

### 十、代码和语法高亮
代码块是Markdown规范的一部分，但是语法高亮不是。然而，很多渲染器，比如GitHub的和这里的Markdown，都支持语法高亮。支持那种语言以及语言的名字应该怎样写随渲染器的不同而变化。这里的Markdown支持许语言；查看完整的列表，以及如何写语言的名字，请参考 [highlight.js 演示页.](http://softwaremaniacs.org/media/soft/highlight/test.html)

```markdown
内嵌 `代码` 有 `反引号` 包含它.
```

代码块要么被包含三个反引号 ``` 的行包围，要么被四个空格缩进。推荐仅仅使用被包围的代码块，它们使用方便并且只有它们支持语法高亮。

> 
    ```javascript
    var s = "JavaScript语法高亮";
    alert(s);
    ```
    ```python
    s = "Python语法高亮"
    print s
    ```
    ```
    没有指明语言，所有没有语法高亮。
    让我们随便写个标签试试 <b>tag</b>
    ```
    
### 十一、脚注
Markdown默认使用的脚注样式链接不会在页面中显示。有时包含一个读者可见的非超链接注脚很有用。对于这样的注脚，GitBook支持的一种简单的语法。
```markdown
Text prior to footnote reference.[^2]
[^2]: Comment to include in footnote.
```

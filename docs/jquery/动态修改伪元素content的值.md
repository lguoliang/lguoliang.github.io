# 动态修改伪元素content的值

js和jquery动态修改`:after`和`:before`伪元素`content`值

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>js和jquery动态修改伪类:after:before</title>
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <style>
    .test {
      position: relative;
      height: 50px;
    }
    .test:before {
      content: attr(data-before);
      position: absolute;
      top: 0;
      left: 0;
    }
    .test:after {
      content: attr(data-after);
      position: absolute;
      bottom: 0;  
      left: 0;
    }
  </style>
</head>
<body>
  <div class="test testjs" data-before="123" data-after="asd"></div>
  <div class="test testjq" data-before="123" data-after="asd"></div>
  <script>
    // 原生js
    var test = document.querySelector('.testjs');
    console.log(test.attributes[1].value) // 123
    console.log(test.attributes[2].value) // asd
    test.attributes[1].value = ':before伪元素';
    test.attributes[2].value = ':after伪元素';
    
    // jquery
    $('.testjq').attr('data-before', ':before伪元素');
    $('.testjq').attr('data-after', ':after伪元素');
  </script>
</body>
</html>
```
# git问题处理

## fatal: refusing to merge unrelated histories解决

上网查到原因是两个分支是两个不同的版本，具有不同的提交历史

解决方案：

```bash
$ git pull origin master --allow-unrelated-histories
```

可以允许不相关历史提，强制合并，确实解决了这个问题。
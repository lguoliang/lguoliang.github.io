# Git 常用

## 提交规范

[git-cz](https://github.com/streamich/git-cz)

```bash
<type>(<scope>): <subject>
```

* type用于说明 commit 的类别，使用下列标识
  
```
feat:     新功能
fix:      修复
docs:     文档变更
style:    代码格式(不影响代码运行的变动)
refactor: 重构(既不是增加feature，也不是修复bug)
perf:     性能优化
test:     增加测试
chore:    构建过程或辅助工具的变动
ci:       CI 相关的变化
revert:   回退
build:    打包
```

* scope 用来说明本次Commit影响的范围，即简要说明修改会涉及的部分,比如数据层、控制层、视图层等
* subject 这次提交的简短描述
  
## 随机生成commit message
```bash
git commit -m"`curl -s http://whatthecommit.com/index.txt`"
```


## 强制覆盖本地代码：

```bash
// 本地代码重置为线上master分支(会覆盖本地所有与远程仓库上同名文件)
git reset --hard origin/master
```

## fetch
```bash
git remote add upstream ssh://git@120.78.197.207:7999/yqp/yqp-sa.git

git fetch upstream

git merge upstream/master

```
[git](https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)


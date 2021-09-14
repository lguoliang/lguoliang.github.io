## js

```js
// js 遍历树形结构(Tree)，根据id找到对应的name(递归)
getTreeName(list,id){
  let _this=this
  for (let i = 0; i < list.length; i++) {
    let a=list[i]
    if(a.id===id){
      return a.name
    }else{
      if(a.children && a.children.length>0){
        let res=_this.getTreeName(a.children,id)
        if(res){
          return res
        }
      }
    }
  }
}
```
/*
 * @Description: 规范
 */
module.exports = [['', '概述'], {
  title: 'HTML规范',
  children: [
    ['html/code', '代码规范'],
    ['html/note', '注释规范'],
    ['html/template', '文件模板'],
    ['html/meta', 'Meta相关'],
  ]
},{
  title: '图片规范',
  children: [
    ['image/format', '图片格式'],
    ['image/size', '图片大小'],
    ['image/quality', '图片质量'],
    ['image/import', '图片引入'],
  ]
},{
  title: 'CSS规范',
  children: [
    ['css/code', '代码规范'],
    ['css/note', '注释规范'],
    ['css/sass', 'sass规范'],
    ['css/reset', '重置样式'],
    ['css/query', '媒体查询'],
    ['css/webkit', '移动端常用私有属性'],
  ]
},{
  title: '命名规范',
  children: [
    ['name/dir', '目录命名'],
    ['name/image', '图片命名'],
    ['name/htmlcss', 'HTML/CSS命名'],
    ['name/classname', 'ClassName命名'],
  ]
},{
  title: 'JS规范',
  children: [
    ['js/language', '语言规范'],
    ['js/code', '代码规范'],
    ['js/react', 'React&JSX书写规范'],
  ]
}]
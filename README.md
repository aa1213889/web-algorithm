## 1.递归拼接树形结构

线性一维数组转为多维数组

- 接口：

```typescript
interface ILineTreeNode {
  id: string
  parent: null | string
  text: string
}

interface ITreeNode extends ILineTreeNode {
  children?: ITreeNode[]
}
```



- 线性一维数组：

```javascript
const linearTreeArr: ILineTreeNode[] = [
  { id: '1', parent: null, text: '菜单1' },
  { id: '11', parent: '1', text: '菜单1-1' },
  { id: '12', parent: '1', text: '菜单1-2' },
  { id: '2', parent: null, text: '菜单2' },
  { id: '21', parent: '2', text: '菜单2-1' },
  { id: '3', parent: null, text: '菜单3' }
]
```



- 多维数组：

```javascript
const multiTreeArr: ITreeNode[] = [
  {
    id: '1',
    parent: null,
    text: '菜单1',
    children: [
      { id: '11', parent: '1', text: '菜单1-1' },
      { id: '12', parent: '1', text: '菜单1-2' }
    ]
  },
  {
    id: '2',
    parent: null,
    text: '菜单2',
    children: [{ id: '21', parent: '2', text: '菜单2-1' }]
  },
  { id: '3', parent: null, text: '菜单3' }
]
```


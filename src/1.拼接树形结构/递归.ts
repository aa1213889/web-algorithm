type Pid = null | string

interface ILineTreeNode {
  id: string
  pid: Pid
  text: string
}

interface ITreeNode extends ILineTreeNode {
  children?: ITreeNode[]
}

const linearTreeArr: ILineTreeNode[] = [
  { id: '1', pid: null, text: '菜单1' },
  { id: '11', pid: '1', text: '菜单1-1' },
  { id: '12', pid: '1', text: '菜单1-2' },
  { id: '2', pid: null, text: '菜单2' },
  { id: '21', pid: '2', text: '菜单2-1' },
  { id: '3', pid: null, text: '菜单3' }
]

function getChildrenNode(linearList: ILineTreeNode[], pid: Pid, resultArr: ITreeNode[]): void {
  linearList.map((item) => (item.pid === pid ? resultArr.push(item) : ''))
  for (const item of resultArr) {
    item.children = []
    getChildrenNode(linearList, item.id, item.children)
  }
}

function inearToTree(linearList: ILineTreeNode[], pid: Pid): ITreeNode[] {
  const resultArr: ITreeNode[] = []
  getChildrenNode(linearList, pid, resultArr)
  return resultArr
}

const multiTreeArr: ITreeNode[] = inearToTree(linearTreeArr, null)
console.log(multiTreeArr)

class Node:
  def __init__ (self, value):
    self.value = value
    self.left = None
    self.right = None

class BST:
  def __init__ (self):
    self.root = None

  def insert(self,value):
    myNode = Node(value)

    if(self.root == None):
      self.root = myNode
      return
    else:
      done = False
      current = self.root

      while(done == False):
        if(value < current.value and current.left  == None):
          current.left = myNode
          return
        if(value >= current.value and current.right == None):
          current.right = myNode
          return
        
        if(value > current.value):
          current = current.right
        else:
          current = current.left

  def print (self, node):
    if(node == None):
      return
    
    self.print(node.left)
    print(node.value)
    self.print(node.right)
    
  def findParent (self,value,node):
    if(value == self.root.value):
      return

    if(node == None):
      return
    
    if(node.right != None):
      if(node.right.value == value):
        return node
    if(node.left != None):
      if(node.left.value == value):
        return node
    
    if(value < node.value):
      self.findParent(value,node.left)
    else:
      self.findParent(value,node.right)
     

myBST = BST()
myBST.insert(5)
myBST.insert(15)
myBST.insert(33)
myBST.insert(1)
myBST.insert(4)
myBST.insert(22)

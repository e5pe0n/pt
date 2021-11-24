{
  type TreeNode = {
    value: string;
  };
  type LeafNode = TreeNode & {
    isLeaf: true;
  };
  type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode];
  };

  const mapNode = <T extends TreeNode>(
    node: T,
    f: (value: string) => string
  ) => ({ ...node, value: f(node.value) });
}

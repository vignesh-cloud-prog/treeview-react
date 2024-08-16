import create from 'zustand';

const generateLargeTreeData = () => {
  return [
    {
      id: 1, name: 'Node 1', children: [
        { 
          id: 2, name: 'Node 1.1', children: [
            { id: 3, name: 'Node 1.1.1', children: [
              { id: 4, name: 'Node 1.1.1.1' },
              { id: 5, name: 'Node 1.1.1.2' },
            ] },
            { id: 6, name: 'Node 1.1.2' },
          ] 
        },
        { 
          id: 7, name: 'Node 1.2', children: [
            { id: 8, name: 'Node 1.2.1' },
            { id: 9, name: 'Node 1.2.2' },
          ] 
        },
      ]
    },
    {
      id: 10, name: 'Node 2', children: [
        { 
          id: 11, name: 'Node 2.1', children: [
            { id: 12, name: 'Node 2.1.1' },
            { id: 13, name: 'Node 2.1.2', children: [
              { id: 14, name: 'Node 2.1.2.1' },
              { id: 15, name: 'Node 2.1.2.2' },
              { id: 16, name: 'Node 2.1.2.3', children: [
                { id: 17, name: 'Node 2.1.2.3.1' },
                { id: 18, name: 'Node 2.1.2.3.2' },
              ] },
            ] },
          ] 
        },
        { id: 19, name: 'Node 2.2' },
      ]
    },
    {
      id: 20, name: 'Node 3', children: [
        { id: 21, name: 'Node 3.1' },
        { id: 22, name: 'Node 3.2', children: [
          { id: 23, name: 'Node 3.2.1' },
          { id: 24, name: 'Node 3.2.2', children: [
            { id: 25, name: 'Node 3.2.2.1' },
            { id: 26, name: 'Node 3.2.2.2' },
          ] },
        ] },
      ]
    }
  ];
};

const useTreeStore = create((set) => ({
  treeData: generateLargeTreeData(),
  updateNode: (id, newNodeData) => set((state) => ({
    treeData: state.treeData.map(node => 
      node.id === id ? { ...node, ...newNodeData } : node
    )
  })),
}));

export { useTreeStore };

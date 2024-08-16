import React from 'react';
import TreeNodeComponent from './TreeNodeComponent';
import { useTreeStore } from '../store/useTreeStore';

const TreeView = () => {
    const { treeData } = useTreeStore();

    return (
        <div className="treeview-container p-4 bg-gray-100 rounded-lg">
            {treeData.map((node) => (
                <TreeNodeComponent key={node.id} node={node} />
            ))}
        </div>
    );
};

export default TreeView;

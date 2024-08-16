import React, { useState, memo } from 'react';
import { useTreeStore } from '../store/useTreeStore';

const TreeNodeComponent = memo(({ node, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const { deleteNode } = useTreeStore();

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={`tree-node mt-2`} style={{ marginLeft: `${level * 2}rem` }}>
            <div className="flex items-center bg-blue-100 rounded hover:bg-blue-200 border-2 border-indigo-500">
                <div className="node-label cursor-pointer p-2 flex-grow">
                    {node.name}
                </div>
                {/* <div className="bg-blue-200 mr-2 m-2 p-2 flex items-center rounded-md border-2 border-indigo-500">
                    <button
                        // onClick={() => deleteNode(node.id)}
                        className="text-base text-gray-600 font-extrabold"
                    >
                        delete
                    </button>
                </div> */}
                {node.children && (
                    <div className="bg-blue-200 mr-2 m-2 p-2 flex items-center rounded-md border-2 border-indigo-500">
                        <button
                            onClick={toggleOpen}
                            className="text-base text-gray-600 font-extrabold"
                        >
                            {isOpen ? '-' : '+'}
                        </button>
                    </div>
                )}
            </div>
            {isOpen && node.children && (
                <div className="node-children">
                    {node.children.map((childNode) => (
                        <TreeNodeComponent key={childNode.id} node={childNode} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
});

export default TreeNodeComponent;

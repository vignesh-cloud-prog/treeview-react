import React, { useState } from 'react';
import { useTreeStore } from '../store/useTreeStore';

const TreeNodeComponent = ({ node, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { updateNode } = useTreeStore();

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={`tree-node mt-2 "`} style={
            {
                marginLeft: `${level * 2}rem`
            }
        }>
            <div className="flex items-center  bg-blue-100 rounded hover:bg-blue-200 border-2 border-indigo-500">
                
                <div className="node-label cursor-pointer p-2 flex-grow">
                    {node.name}
                </div>
                {/* Conditional rendering of the + or - button */}
                {node.children && (
                    < div className='bg-blue-200 mr-2 m-2 p-2 flex items-center rounded-md  border-2 border-indigo-500'>
                    <button
                        onClick={toggleOpen}
                        className="text-basis text-gray-600 font-extrabold "
                    >
                        {isOpen ? '-' : '+'}
                    </button>
                    </div>
                )}
            </div>
            {/* Recursively render child nodes */}
            {isOpen && node.children && (
                <div className="node-children">
                    {node.children.map((childNode) => (
                        <TreeNodeComponent key={childNode.id} node={childNode} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeNodeComponent;

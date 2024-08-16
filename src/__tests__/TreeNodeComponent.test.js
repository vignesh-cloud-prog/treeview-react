import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TreeNodeComponent from '../components/TreeNodeComponent';
import { useTreeStore } from '../store/useTreeStore';

// Mock the Zustand store
jest.mock('../store/useTreeStore', () => ({
    useTreeStore: jest.fn(),
}));

// Define mock implementations
const mockDeleteNode = jest.fn();
const mockUpdateNode = jest.fn();
const mockAddNode = jest.fn();

// Return the mock functions when useTreeStore is called
useTreeStore.mockReturnValue({
    deleteNode: mockDeleteNode,
    updateNode: mockUpdateNode,
    addNode: mockAddNode,
});

const sampleNode = {
    id: 1,
    name: 'Root Node',
    children: [
        {
            id: 2,
            name: 'Child Node 1',
            children: [],
        },
        {
            id: 3,
            name: 'Child Node 2',
            children: [],
        },
    ],
};

describe('TreeNodeComponent', () => {
    it('renders the node name', () => {
        render(<TreeNodeComponent node={sampleNode} />);
        expect(screen.getByText('Root Node')).toBeInTheDocument();
    });

    it('displays children when expanded', () => {
        render(<TreeNodeComponent node={sampleNode} />);
        
        // Click the + button to expand the node
        fireEvent.click(screen.getByText('+'));

        // Check that children nodes are displayed
        expect(screen.getByText('Child Node 1')).toBeInTheDocument();
        expect(screen.getByText('Child Node 2')).toBeInTheDocument();
    });

    it('hides children when collapsed', () => {
        render(<TreeNodeComponent node={sampleNode} />);
        
        // Click the + button to expand the node
        fireEvent.click(screen.getByText('+'));
        
        // Click the - button to collapse the node
        fireEvent.click(screen.getByText('-'));
        
        // Check that children nodes are hidden
        expect(screen.queryByText('Child Node 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Child Node 2')).not.toBeInTheDocument();
    });

});

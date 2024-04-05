import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NodeState {
    node: Node
}

export interface Node {
    id: string;
    type: string;
    // Add other properties as needed
}

const initialState: NodeState = {
    node: {
        id: '',
        type: ''
    }
}

const nodeSlice = createSlice({
    name: 'node',
    initialState,
    reducers: {
        setNode: (state, action: PayloadAction<Node>) => {
            return { ...state, node: action.payload };
        },
        resetNode: () => initialState
    }
})
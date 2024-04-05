import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { Node } from './nodeSlice';

interface WorkflowState {
    workflows: Workflow[];
}

interface Workflow {
    id: string;
    name: string;
    nodes: Node[];
    edges: Edge[];
}

interface Edge {
    id: string;
    type: string;
    // Add other properties as needed
}

const initialState: WorkflowState = {
    workflows: [],
};

const workflowSlice = createSlice({
    name: 'workflow',
    initialState,
    reducers: {
        addWorkflow: (state, action: PayloadAction<Workflow>) => {
            state.workflows.push(action.payload)
        },
        getWorkflow: (state,action:PayloadAction<string>) => {
            const index = state.workflows.findIndex((wf)=> wf.id===action.payload);
            if(index!==-1){
                return {...state,workflow:[state.workflows[index]]};
            }else{
                console.error("No such workflow found!");
                return state;
            }
        },
        updateWorkflow: (state, action:PayloadAction<Workflow>) => {
            const index = state.workflows.findIndex((wf)=> wf.id === action.payload.id);
            if (index !== -1){
                state.workflows[index] = action.payload
            } else{
                console.log("Tried to update non-existent workflow");
            }
        }
    },
});

export const { addWorkflow } = workflowSlice.actions;
export default workflowSlice.reducer;

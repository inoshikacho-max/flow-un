import React from 'react'
import ReactFlow, { Background, BackgroundVariant, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

const Canvas: React.FC = () => {
    const minimapStyle = {
        height: 120,
    };

    return (
        <div className=' h-full bg-black '>
            <ReactFlow fitView>
                <Controls />
                <MiniMap style={minimapStyle} zoomable pannable />
                <Background variant={BackgroundVariant.Dots} size={2} />
            </ReactFlow>
        </div>
    )
}

export default Canvas
import React, { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

type ParentProps = {
    children: ReactNode;
}

const FlowPageLayout: React.FC<ParentProps> = ({ children }) => {
    return (
        <div className=' flex flex-col h-screen '>
            <header className=' container h-20 bg-blue-700'>Header</header>
            <div className=' flex flex-1 '>
                <nav className=' w-80 border-r-2 p-4 border-blue-700' id='sidebar'>
                    <Sidebar/>
                </nav>
                {children}
            </div>
        </div>
    )
}

export default FlowPageLayout
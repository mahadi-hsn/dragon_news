import Header from '@/Components/Shared/Header';
import React from 'react';

const NewsDetailsLayout = ({children}) => {
    return (
        <div className='w-10/12 h-screen mx-auto'>
            <Header></Header>
            {children}
        </div>
    );
};

export default NewsDetailsLayout;
import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-md'>
            <button className='btn btn-secondary btn-outline'>Latest</button>
            <Marquee pauseOnHover={true}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, ullam? At minima cupiditate animi debitis repellat voluptatibus laborum. Esse, eius?
            </Marquee>
        </div>
    );
};

export default BreakingNews;
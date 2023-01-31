import React, { useEffect } from 'react';

const AddThis = () => {

    useEffect(() => {
        window.addthis_config = {
            pubid: '63d955645e93bc84',
        };

        const script = document.createElement('script');
        script.src = 'https://s7.addthis.com/js/300/addthis_widget.js#async=1';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    
    return (
        <>
            <div className="addthis_inline_share_toolbox"></div>
        </>
    );
};

export default AddThis;

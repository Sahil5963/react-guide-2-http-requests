import React from 'react';
import loaderHoc from '../../../hoc/loaderHoc'

const postList = (props) => {
    return (
        <section className="Posts" >
            {props.children}
        </section>
    );
}

export default postList;

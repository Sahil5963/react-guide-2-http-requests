import React, { Component } from 'react';

const loaderHoc = (propsName) => (Wrapped) => {
    return class loaderHoc extends Component {
        render() {
            return this.props[propsName].length === 0 ? <div className="loader"></div> : <Wrapped {...this.props}/>

        }
    }
}

export default loaderHoc;
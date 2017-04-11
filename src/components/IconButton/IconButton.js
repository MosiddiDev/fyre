import React from 'react';
import lodash from 'lodash';
import Icon from '../Icon/Icon.js';

class IconButton extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(e) {
        var { href, onClick } = this.props;

        if(href){
            location.href = href;
        }

        if(onClick){
            this.props.onClick(e);
        }
    }

    render() {
        var { className, icon, src, url } = this.props;

        return (
            <div className={ className } onClick={ this.onClick }>
                <Icon src={ src } url={ url }>{ icon }</Icon>
                { this.props.children }
            </div>
        );
    }
}

IconButton.propTypes = {
    icon: React.PropTypes.string,
    src: React.PropTypes.string,
    url: React.PropTypes.string
};

module.exports = IconButton;

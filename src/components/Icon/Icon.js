import React from 'react';
import lodash from 'lodash';
import './Icon.less';

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }

    getStyle(){
        const { diameter, height, width } = this.props;
        const style = {};
        let { url } = this.props;

        if(diameter){
            style.height = style.width = diameter;
        }
        if(height){
            style.height = height;
        }
        if(width){
            style.width = width;
        }
        if(url){
            url = require(`../../resources/${ url }`);
            style.backgroundImage = `url(${ url })`;
        }

        return style;
    }

    getClass(){
        const { shape, place, href, onClick, className } = this.props;
        const classNames = [
            'icon',
            className,
            shape === 'rectangle' && 'rectangle',
            shape === 'circle' && 'circle',
            place === 'left' && 'left',
            place === 'right' && 'right',
            (href || onClick) && 'pointer'
        ].filter(cls => !!cls).join(' ');

        return classNames;
    }

    renderImg(){
        let { src } = this.props;

        if(src) {
            src = require(`../../resources/${ src }`);
            return (
                <img src={ src } height='100%' width='100%'/>
            );
        }
    }

    onClick(e){
        var { href, onClick } = this.props;

        if(href) {
            location.href = href;
        }

        if(onClick) {
            onClick(e);
        }
    }

    render() {
        const className = this.getClass();
        const style = this.getStyle();

        return (
            <div className={ className } style={ style } onClick={ this.onClick }>
                { this.renderImg() }
                { this.props.children }
            </div>
        );
    }
};

Icon.propTypes = {
    src: React.PropTypes.string,
    url: React.PropTypes.string,
    place: React.PropTypes.string,
    shape: React.PropTypes.string
};

module.exports = Icon;

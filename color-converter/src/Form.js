import React from 'react';
//import ReactDom from 'react-dom';

export default class Form extends React.Component {
    state = {
        colorHex : '',
        colorRgb : ''
    };

    changeHandler = (evt) => {
        let colorHex = evt.currentTarget.value;
        this.setState({colorHex});
        let colorRgb = '';
        if (colorHex.length === 7) {

            colorRgb = this.hexToRgb(colorHex);

        }
        this.setState({colorRgb});
    };

    hexToRgb = (str) => {
        let result = 'Ошибка!'
        if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/ig.test(str) && str.length === 7 && str[0] === '#') {
            let hex = str.substr(1);
            hex = hex.length == 3 ? hex.replace(/(.)/g, '$1$1') : hex;
            let rgb = parseInt(hex, 16);
            result = 'rgb(' + [(rgb >> 16) & 255, (rgb >> 8) & 255, rgb & 255].join(',') + ')';
        }
        return result;
    };


    render() {
        const {colorHex, colorRgb} = this.state;
        const {onColorChange} = this.props;

        const divStyle = {
            backgroundColor: colorRgb.indexOf('rgb(') !== -1 ? colorRgb : '#fff',
            height : '100vh'
        };

        return(
            <div className={'col-12'} style={divStyle}>
                <form>
                    <div className={'col-6'}>
                        <label htmlFor={'color'}>Цвет</label>
                        <input type="text" className={'form-control'} id={'color'} name={'colorHex'} value={colorHex} onChange={this.changeHandler} maxLength={7}/>
                        <br></br>
                        <input type="text" className={'form-control'} id={'color'} name={'colorRgb'} value={colorRgb} readOnly={true}
                               disabled={true} onColorChange={colorRgb}/>
                    </div>
                </form>
            </div>

        )
    };
}
import React from 'react'
import styled, { css } from 'styled-components'

const CheckContainer = styled.div`
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.15);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.15);
    background-color: ${props => props.checked ? '#7289da' : '#72767d'};
    border-radius: 14px;
    width: 42px;
    height: 24px;
    opacity: 1;
    overflow: hidden;
    position: relative;
    display: block;
    transition: background .15s ease-in-out,box-shadow .15s ease-in-out,border .15s ease-in-out,opacity .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
    }

    &::after {
        -moz-box-shadow: 0 2px 4px rgba(0,0,0,.3);
        -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.3);
        box-shadow: 0 2px 4px rgba(0,0,0,.3);
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        transform: translateZ(0);
        left: 0;
        pointer-events: none;
        transition: transform .15s ease-in-out,width .1s ease-in-out,left .1s ease-in-out,-webkit-transform .15s ease-in-out;
        border-radius: 9px;
        height: 18px;
        width: 18px;
        margin: 3px;
        content: "";
        display: block;
        position: absolute;
        background-color: #fff;
    }

    &:active::before {
        opacity: .1;
    }

    &:active::after {
        width: 26px;
        -moz-box-shadow: 0 1px 2px rgba(0,0,0,.4);
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.4);
        box-shadow: 0 1px 2px rgba(0,0,0,.4);
        background-color: #f6f6f7;
    }

    ${props => props.checked && css`
        &::after {
            -webkit-transform: translate3d(18px,0,0);
            -moz-transform: translate3d(18px,0,0);
            transform: translate3d(18px,0,0);
        }

        &:active::after {
            width: 26px;
            left: -8px;
            -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.4);
            -moz-box-shadow: 0 1px 2px rgba(0,0,0,.4);
            box-shadow: 0 1px 2px rgba(0,0,0,.4);
        }
    `}
`

const Check = styled.input.attrs({
    type: 'checkbox'
})`
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
`

function Checkbox({ checked, onChange }) {
    const [defaultChecked, setDefaultChecked] = React.useState(checked || false)

    return (
        <CheckContainer checked={checked || defaultChecked}>
            <Check checked={checked || defaultChecked} onChange={event => onChange ? onChange(event) : setDefaultChecked(!defaultChecked)} />
        </CheckContainer>
    )
}

export default Checkbox
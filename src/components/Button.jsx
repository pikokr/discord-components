import React from 'react'
import styled, { css } from 'styled-components'

const Btn = styled.button`
    cursor: pointer;
    border-radius: 3px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:focus {
        outline: none;
    }

    ${props => props.color && colors[props.color]}
`

const colors = {
    purple: css`
        padding: 7px 16px;
        font-size: 15px;
        color: #fff;
        background-color: #7289da;

        -webkit-transition: all .17s ease-out;
        -moz-transition: all .17s ease-out;
        -ms-transition: all .17s ease-out;
        -o-transition: all .17s ease-out;
        transition: all .17s ease-out;

        text-align: center;

        border: none;

        &:hover {
            background: #677bc4;
        }
    `,
    red: css`
        padding: 2px 16px;
        font-size: 14px;
        letter-spacing: .3px;
        color: #f04747;
        background-color: transparent;

        -webkit-transition: color .17s ease,background-color .17s ease,border-color .17s ease;
        -moz-transition: color .17s ease,background-color .17s ease,border-color .17s ease;
        -ms-transition: color .17s ease,background-color .17s ease,border-color .17s ease;
        -o-transition: color .17s ease,background-color .17s ease,border-color .17s ease;
        transition: color .17s ease,background-color .17s ease,border-color .17s ease;

        text-align: center;

        border: 1px solid ${props => props.hover ? 'rgba(240,71,71,.3)' : '#f04747'};

        width: auto;
        height: 32px;
        min-width: auto;
        min-height: 32px;

        ${props => props.hover && css`
            &:hover {
                border-color: rgba(240,71,71,.6);
            }
        `}
    `
}

function Button({ color, hover, ...props }) {
    return <Btn color={color || 'purple'} hover={hover} {...props} />
}

export default Button
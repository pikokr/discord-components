import React from 'react'
import styled from 'styled-components'

const TextareaContainer = styled.textarea`
    font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;
    padding: 10px;
    height: 120px;
    background-color: var(--deprecated-text-input-bg);
    border: 1px solid var(--deprecated-text-input-border);
    border-radius: 3px;
    color: var(--text-normal);
    -webkit-transition: border-color .2s ease-in-out;
    -moz-transition: border-color .2s ease-in-out;
    transition: border-color .2s ease-in-out;
    font-size: 16px;
    outline: none;
    resize: none;

    &:focus {
        border-color: #7289da;
    }
`

function Textarea(props) {
    return <TextareaContainer {...props} />
}

export default Textarea
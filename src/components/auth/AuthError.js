import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ErrorMessage} from '../common'
import {getThemeProp} from '../common/helpers'

const ErroMessageWithCloseIcon = styled(ErrorMessage)`
    position: relative;
    padding: 15px;
    display: block;
    cursor: pointer;

    &:after {
        content: '${'\u2715'}';
        color: ${getThemeProp(['colors', 'grayscale', 'white'], 'white')};
        position: absolute;
        top: 4px;
        right: 4px;
        margin: 0;
        padding: 0;
        font-size: 8px;
        line-height: 8px;
        background: transparent;
    }
`
const AuthError = ({error, clearError}) =>
    <ErroMessageWithCloseIcon onClick={clearError}>
        {error}
    </ErroMessageWithCloseIcon>

AuthError.propTypes = {
    error: PropTypes.string,
    clearError: PropTypes.func
}

export default AuthError

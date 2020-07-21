import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './index.less';

export enum ButtonType {
    primary = 'primary',
    danger = 'danger',
    success = 'success'
}

export enum ButtonSize {
    lg = 'lg',
    sm = 'sm'
}

interface IButtonProps {
    className?: string,
    children?: string | ReactNode,
    buttonType?: string,
    buttonSize?: string,
}


type ButtonProps = React.ButtonHTMLAttributes<HTMLElement>;

type commonProps = Partial<IButtonProps & ButtonProps>

const Button: FC<commonProps> = ({ buttonType, children }) => {

    const classes = classNames('btn', {
        [`btn-${ buttonType }`]: buttonType
    })

    return (
        <div className={ classes }>
            {
                children
            }
        </div>
    )
};

Button.defaultProps = {
    buttonType: '',
    children: '按钮'
}

export default Button;
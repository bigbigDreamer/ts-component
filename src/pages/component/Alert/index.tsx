import React, {FC, FunctionComponent, ReactNode, StrictMode} from 'react';


interface IAlertProps {
    children?: ReactNode | string,
    className?: string,
    type?: string
}


interface IAlert<T> extends FunctionComponent<T>{
}

const Alert: IAlert<IAlertProps> = ({ children, type, className }) => {
    return (
        <StrictMode>
            <div className="alert">
                { children}
            </div>
        </StrictMode>
    )
}

export default Alert;
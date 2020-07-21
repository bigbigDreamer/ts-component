import React, {FC, ReactNode, StrictMode} from 'react';


interface IAlertProps {
    children?: ReactNode | string,

}

interface IAlert extends FC<IAlertProps>{
    type?: string
}

const Alert: IAlert = () => {
    return (
        <StrictMode>
            <div className="alert">

            </div>
        </StrictMode>
    )
}
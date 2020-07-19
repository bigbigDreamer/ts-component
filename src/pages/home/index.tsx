import React, { ReactElement, StrictMode } from 'react';


import './index.less';

interface IHomeProps<T> {
    text: T
}

const Home: React.FC<IHomeProps<string>> = ({ text }) => {

    const Hello: ReactElement = <p>测试</p>;

    return (
            <StrictMode>
                <div className="home">
                    { text }
                    { Hello }
                </div>
            </StrictMode>
    )
}

export default Home;
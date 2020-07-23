import React, { ReactElement, StrictMode, useState } from 'react';
import Button  from "../component/Button";
import { numHandler } from '../utils';
import { regExpFormatStr, IFunc } from "../utils/extra";


import './index.less';

interface IHomeProps<T> {
    text: T
}

const Home: React.FC<IHomeProps<string>> = ({ text }) => {

    const [status, setStatus] = useState<string>('认证中');

    const Hello: ReactElement = <p>测试</p>;

    console.log(numHandler('62222319980327411x', 4))

    return (
            <StrictMode>
                <div className="home">
                    <button onClick={() => setStatus('认证')}>更改</button>
                        { text }
                        { Hello }
                        <br/>
                        { status }
                        <br/>
                    <Button />
                </div>
            </StrictMode>
    )
}

export default Home;
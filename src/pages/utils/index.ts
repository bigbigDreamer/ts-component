/*
 * @desc 处理数字，并且添加分割
 */

interface IToolFunction<T, U> {
    (target: T, limits?: number): U
}

type ITF<T, U> = IToolFunction<T, U>;

const numHandler: ITF<any, string> = (target: any, limits: number = 4) => {
    // 初始化数组
    let _$: string[] = target.toString().split('');
    // 记录原始数组长
    let _len: number = _$.length;
    // 新格式临时数组
    let _format: string[] = [];

    // loop
    for(let i: number = 0; i < _len; i++) {
        // 轮询数组长
        let _loopLen: number = _$.length;
        if(_loopLen % limits === 0) { _format.push(_$.splice(0, limits).join('')); }
        _format.push(_$.splice(0, _loopLen % limits).join(''));
    }

    return _format.join(' ');
}

export {
    numHandler
}
// 正则分割任意字符串

interface IStrType {
    length?: number
}

// 约束泛型
export interface IFunc<T extends IStrType = string, U = number, Z = string>{
    ( value:T | number, limits: U, suffix: Z ): string
}

const regExpFormatStr: IFunc
    = (value, limits, suffix) => {
   const _regExp: RegExp = new RegExp(`.(?=(.{${limits}})+$)`, 'g');
   return  (typeof value !== "number" && value?.length ? value : value.toString()).replace(_regExp, $n1 => {
        return `${$n1}${suffix}`
    });
}

export {
    regExpFormatStr
}
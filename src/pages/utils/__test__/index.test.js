import { regExpFormatStr } from "../extra";
/**
 * @desc 对于工具函数的单元测试
 * @date 2020-07-23  19:06:16
 * @author eric wang <eric_wang@yunquna.com>
 * @copyright 2020 YQN F2ETeam
 */
describe('Version 1.0.0 Test Normal Function', () => {
    it('Test string suits', () => {
        const res = regExpFormatStr('887779', 4, ' ');
        expect(res).toEqual('88 7779');
        expect(typeof res).toBe('string');
    });

    it('Test number suits', () => {
        const res = regExpFormatStr(1234567890, 3, ',');
        expect(res).toEqual('1,234,567,890');
    });

    it('Test number+string suits', () => {
        const res = regExpFormatStr('12345shsxsjjx', 1, '-');
        expect(res).toEqual('1-2-3-4-5-s-h-s-x-s-j-j-x');
    })
})
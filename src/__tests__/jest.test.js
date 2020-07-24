import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from "../pages/component/Button";
import { regExpFormatStr } from "../pages/utils/extra";



describe('test button suites', () => {
    it('should be a button', () => {
        const wrapper = render(<Button>测试</Button>);
        const btn = wrapper.getByText('测试');
        expect(btn.tagName).toEqual('DIV');
        expect(btn.classList.contains('btn')).toBe(true);
    });


    it('should be a button', () => {
        const wrapper = render(<Button>测试</Button>);
        const btn = wrapper.getByText('测试');
        expect(btn).toHaveClass('btn');
    });


});

describe('test utils to be true', () => {
    // 测试工具函数是否正常展示
    it('check func is normal work', () => {
        const res = regExpFormatStr(155223893049034783748, 2, '-');
        expect(res).toEqual('1-55-22-38-93-04-90-34-77-00-00')
    })
})


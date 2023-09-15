/* 
 * This file contains tests that check whether your solution in style.css is correct.
 * Run the tests with `pnpm run test`
 *
 * You can through this file to learn more about what is being tested, but do not modify it.
 *
 */

const fs = require('fs');
const path = require('path');
const w = require('jest-autograding-reporter').weight

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const styles = fs.readFileSync(path.resolve(__dirname, './style.css'), 'utf8');

jest.dontMock('fs');

describe('The recipe cards have the appropriate layout', () => {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    const styleElement = document.createElement('style')
    styleElement.innerHTML = styles.toString();
    document.body.appendChild(styleElement)
  });

  test('container is a flexbox', function () {
    const container = document.querySelector('.container')
    const style= window.getComputedStyle(container)
    expect(style.display).toBe('flex')
    expect(style.flexWrap).toBe('wrap')
    expect(style.flexDirection).toBe('row')
  });

  test('body has max-width and margin', function () {
    const body = document.querySelector('body')
    const style= window.getComputedStyle(body)
    expect(style.maxWidth).toBe('900px')
    expect(style.margin).toBe('auto')
  });

  test('header is nicely fixed', function () {
    const header = document.querySelector('header')
    const style= window.getComputedStyle(header)
    expect(style.position).toBe('fixed')
    expect(style.background).toBe('rgb(255, 255, 255)')
    expect(style.top).toBe('0px')
    expect(style.maxWidth).toBe('900px')
    expect(style.width).toBe('90%')
  });
})

import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import pagemap from 'pagemap'
import PageMap from '../'

jest.mock('pagemap', () => jest.fn())

describe('PageMap', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    pagemap.mockClear()
  })

  afterEach(() => {
    act(() => {
      ReactDOM.unmountComponentAtNode(container)
    })
    document.body.removeChild(container)
  })

  const render = props => {
    act(() => {
      ReactDOM.render(<PageMap {...props} />, container)
    })
    return container.querySelector('canvas')
  }

  it('forwards the documented defaults and the mounted canvas to pagemap', () => {
    const canvas = render({})
    const { styles, ...defaults } = PageMap.defaultProps
    const { container: canvasStyle, ...elementStyles } = styles

    expect(canvas).not.toBeNull()
    expect(canvas.style.position).toBe(canvasStyle.position)
    expect(pagemap).toHaveBeenCalledTimes(1)
    expect(pagemap).toHaveBeenCalledWith(canvas, {
      ...defaults,
      styles: elementStyles
    })
    expect(pagemap.mock.calls[0][1].drag).toBe('rgba(0, 0, 0, 0.10)')
  })

  it('forwards custom options without passing canvas styles or mutating props', () => {
    const viewport = document.createElement('main')
    const styles = Object.freeze({
      container: Object.freeze({ width: '120px' }),
      article: '#123456'
    })
    const props = Object.freeze({
      viewport,
      styles,
      back: '#111111',
      view: '#222222',
      drag: '#333333',
      interval: 250
    })
    const canvas = render(props)

    expect(canvas.style.width).toBe('120px')
    expect(pagemap).toHaveBeenCalledWith(canvas, {
      viewport,
      styles: { article: '#123456' },
      back: '#111111',
      view: '#222222',
      drag: '#333333',
      interval: 250
    })
    expect(styles.container).toEqual({ width: '120px' })
    expect(styles.article).toBe('#123456')
  })

  it.each([null, ''])('preserves an explicitly empty drag value: %p', drag => {
    const canvas = render({ drag })

    expect(pagemap).toHaveBeenCalledWith(canvas, expect.objectContaining({ drag }))
  })

  it('uses the default drag color when the prop is undefined', () => {
    const canvas = render({ drag: undefined })

    expect(pagemap).toHaveBeenCalledWith(canvas, expect.objectContaining({
      drag: PageMap.defaultProps.drag
    }))
  })

  it('forwards a changed drag color when the component is rendered again', () => {
    const canvas = render({ drag: '#111111' })
    render({ drag: '#222222' })

    expect(pagemap).toHaveBeenCalledTimes(2)
    expect(pagemap).toHaveBeenLastCalledWith(canvas, expect.objectContaining({
      drag: '#222222'
    }))
  })
})

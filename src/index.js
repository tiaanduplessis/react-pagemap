import React, { useRef, useEffect }  from 'react'
import pagemap from 'pagemap'

const PageMap = React.memo(({ viewport, styles, back, view, interval }) => {
  const mapElem = useRef(null)

  const { container } = styles

  useEffect(() => {
    pagemap(mapElem.current, {
      viewport,
      styles,
      back,
      view,
      interval
    })
  })

  return <canvas style={container} ref={mapElem}></canvas>
})

PageMap.defaultProps = {
  viewport: null,
  styles: {
    container: {
      position: 'fixed',
      top: '8px',
      right: '8px',
      width: '100px',
      height: '100%',
      zIndex: '100'
    },
    'header,footer,section,article': 'rgba(0, 0, 0, 0.08)',
    'h1,a': 'rgba(0, 0, 0, 0.10)',
    'h2,h3,h4': 'rgba(0, 0, 0, 0.08)'
  },
  back: 'rgba(0, 0, 0, 0.02)',
  view: 'rgba(0, 0, 0, 0.05)',
  drag: 'rgba(0, 0, 0, 0.10)',
  interval: null
}


export default PageMap

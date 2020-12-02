import WaterMark, { WatermarkOptions } from '../src'

const waterMark = new WaterMark()

const options:WatermarkOptions = {
  width: 100,
  height: 100,
  opacity: 0.5,
  rotate: 20,
  fontSize: 14,
  fontWeight: 'normal',
  fontColor: '#727071',
  fontFamily: 'sans-serif',
  text: '测试文本',
  textAlign: 'center'
}

// 修改水印配置
waterMark.update(options)

// 渲染水印
waterMark.render()

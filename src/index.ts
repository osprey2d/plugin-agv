import { elDecorate } from './decorator/elDecorator'
import { cutString } from './utils'

const config = {
  // elDecorate
  createdPoint(point, config) {
    const _point = Object.assign({}, point)
    _point.id = config.id || null
    _point.type = config.type || []
    _point.pointType = config.pointType || []
    _point.pointTypePosition = config.pointTypePosition || []
    _point.name = config.name || `P${cutString(config._nameIndex)}`
    _point.isWorkPoint = config.isWorkPoint || false
    _point.isParkPoint = config.isParkPoint || false
    _point.pointSn = config.pointSn || `P${cutString(config._nameIndex)}`
    _point.equip = config.equip || ''
    _point.actions = config.actions || ''
    _point.taskType = config.taskType || ''
    _point.priority = config.priority || ''
    _point.zPosition = config.zPosition || 0
    _point.inboundAngle = config.inboundAngle || 0
    _point.slow = config.slow || false
    _point.actions = config.actions || ''
    _point.options = config.options || {
      fontStyle: {
        offsetX: _point.x + 6,
        offsetY: _point.y - 10
      },
      fontSize: 12,
      radius: 5
    }
    return _point
  },
  changePointAttribute(arr, key, mid) {
    arr.forEach(element => {
      element.mid === mid && console.log('attr', key)
    })
    return arr
  }
}

export default config

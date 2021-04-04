const MobileDetect = require('mobile-detect');
import {EngineService} from './engine.service';


/**
 * Support class that provides some hardware info utils
 */
class HardwareInfo {
  static detection = new MobileDetect(window.navigator.userAgent)
  static vendor: string

  constructor() {
  }

  static isMobile() {
    return this.detection.mobile()
  }

  static isTablet() {
    return this.detection.phone()
  }

  static gpuVendor() {
    return EngineService.engine.getGlInfo().vendor
  }

  static hasGoodVideoCard() {
    return /(NVIDIA|AMD)/.test(this.gpuVendor()) ||
      /(NVIDIA|AMD)/.test(EngineService.engine.getGlInfo().renderer)
  }
}

export { HardwareInfo }

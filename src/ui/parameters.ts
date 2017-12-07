/**
 * @file UI Parameters
 * @author Alexander Rose <alexander.rose@weirdbyte.de>
 */

import { StageParameters } from '../stage/stage'
import { MouseActionPresets } from '../controls/mouse-actions'

type BooleanParam = { type: 'boolean' }
function BooleanParam () { return { type: 'boolean' } as BooleanParam }

type ColorParam = { type: 'color' }
function ColorParam () { return { type: 'color' } as ColorParam }

type IntegerParam = { type: 'integer', max: number, min: number }
function IntegerParam (max: number, min: number) {
  return { type: 'integer', max, min } as IntegerParam
}

type NumberParam = { type: 'number', precision: number, max: number, min: number }
function NumberParam (precision: number, max: number, min: number) {
  return { type: 'number', precision, max, min } as NumberParam
}

type RangeParam = { type: 'range', step: number, max: number, min: number }
function RangeParam (step: number, max: number, min: number) {
  return { type: 'range', step, max, min } as RangeParam
}

type SelectParam = { type: 'select', options: { [k: string]: string } }
function SelectParam (...options: string[]) {
  return { type: 'select', options: options.reduce((o, k) => ({ ...o, [k]: k}), {}) } as SelectParam
}

type ParamType = BooleanParam|ColorParam|IntegerParam|NumberParam|RangeParam|SelectParam

export const UIStageParameters: { [k in keyof StageParameters]: ParamType } = {
  backgroundColor: ColorParam(),
  quality: SelectParam('auto', 'low', 'medium', 'high'),
  sampleLevel: RangeParam(1, 5, -1),
  impostor: BooleanParam(),
  workerDefault: BooleanParam(),
  rotateSpeed: NumberParam(1, 10, 0),
  zoomSpeed: NumberParam(1, 10, 0),
  panSpeed: NumberParam(1, 10, 0),
  clipNear: RangeParam(1, 100, 0),
  clipFar: RangeParam(1, 100, 0),
  clipDist: IntegerParam(200, 0),
  fogNear: RangeParam(1, 100, 0),
  fogFar: RangeParam(1, 100, 0),
  cameraType: SelectParam('perspective', 'orthographic'),
  cameraFov: RangeParam(1, 120, 15),
  lightColor: ColorParam(),
  lightIntensity: NumberParam(2, 10, 0),
  ambientColor: ColorParam(),
  ambientIntensity: NumberParam(2, 10, 0),
  hoverTimeout: IntegerParam(10000, -1),
  tooltip: BooleanParam(),
  mousePreset: SelectParam(...Object.keys(MouseActionPresets))
}
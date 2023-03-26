import { ChargingInfo, ChargingStepInfo } from '../../models/ChargingInfo'
import * as chargingService from '../../services/ChargingService'
import Commands from '../../models/Commands'

String.prototype.startsWith = function (str) {
  return this.indexOf(str) === 0
}

export const execute = async (commands: string[]): Promise<ChargingInfo> => {
  const steps: ChargingStepInfo[] = []
  for (const command of commands) {
    switch (true) {
      case command.startsWith(Commands.Begin):
        steps.push(getBeginState())
        break
      case command.startsWith(Commands.End):
        steps.push(getEndState())
        break
      case command.startsWith(Commands.Wait):
        await delay(Number.parseInt(command.split(' ').at(-1)!))
        break
      case command.startsWith(Commands.StartStation):
        steps.push(
          await chargingService.startStation({
            id: Number.parseInt(command.split(' ').at(-1)!)
          })
        )
        break
      case command.startsWith(Commands.StopStation):
        steps.push(
          await chargingService.stopStation({
            id: Number.parseInt(command.split(' ').at(-1)!)
          })
        )
        break
    }
  }
  return { steps: steps }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms * 1000))
}

function getBeginState(): ChargingStepInfo {
  return {
    step: Commands.Begin,
    timestamp: new Date().valueOf(),
    companies: [],
    totalChargingPower: 0,
    totalChargingStations: []
  }
}

function getEndState(): ChargingStepInfo {
  return {
    step: Commands.End,
    timestamp: new Date().valueOf(),
    companies: [],
    totalChargingPower: 0,
    totalChargingStations: []
  }
}

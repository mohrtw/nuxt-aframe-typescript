import { Module } from 'vuex'
import { RootState } from '../../index'

export const state = () => ({
  aVal: 3 as number,
})

export type MyModuleState = ReturnType<typeof state>

const module: Module<MyModuleState, RootState> = {
    state
}

export default module
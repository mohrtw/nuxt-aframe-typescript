import { GetterTree, ActionTree, MutationTree, ModuleTree, Module } from 'vuex'
import MyModule from './modules/mymodule/index'

export const state = () => ({
  myFirstName: 'Thomas' as string,
  myLastName: 'Mohr' as string,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    fullName: state => state.myFirstName + ' ' + state.myLastName
}

export const modules: ModuleTree<RootState> = {
    mymod: MyModule
}
import { Module, VuexModule, Mutation, getModule, } from 'vuex-module-decorators';

import store from '@/store';
import { I18nType, LocalStorageEnum, MutationType } from './types';
import LocalStorageUtil from '@/common/utils/local-storage-util';
import config from "@/config/index"
import i18n from '@/i18n'

@Module({
    name: 'settings', dynamic: true, namespaced: true, store,
})
export default class SettingsStore extends VuexModule {
    public language: string | I18nType = LocalStorageUtil.getItem(LocalStorageEnum.language) || config.i18n;

    get getLanguage(): string {
        return this.language
    }

    @Mutation
    [MutationType.UPDATE_LANGUAGE](language: I18nType): void {
        this.language = language;
        i18n.locale = language;
        LocalStorageUtil.addItem(LocalStorageEnum.language, language)
    }

}

export const SettingsStoreModule = getModule(SettingsStore);
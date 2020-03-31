import AvatarModelEnum from '~/enums/avatar-model'
export default class AvatarAsset {
    type: AvatarModelEnum
    assetString: string

    constructor(type: AvatarModelEnum = AvatarModelEnum.HTML){
        this.type = type
        this.assetString = ''
    }

    createAssetString() {
        return ''
    }
}

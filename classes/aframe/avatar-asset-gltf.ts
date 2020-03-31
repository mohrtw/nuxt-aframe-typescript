import AvatarModelEnum from '~/enums/avatar-model'
import AvatarAsset from './avatar-asset'

export default class AvatarAssetGLTF extends AvatarAsset {
    src: string
    scale: number

    constructor(src: string = defaultAvatarModelSrc, scale = defaultAvatarModelScale) {
        super(AvatarModelEnum.GLTF)
        this.src = src
        this.scale = scale
        this.assetString = this.createAssetString()
    }

    // TODO : add gltf asset to a-assets, ref id in createAssetString
    createAssetString() : string {
        return `<a-gltf-model class="gltfmodel" src="${this.src}"
                        scale="${this.scaleString}">
                    </a-gltf-model>`
    }

    get scaleString() : string {
        return `${this.scale} ${this.scale} ${this.scale}`
    }

}

export const defaultAvatarModelSrc : string = '/gltf/avatars/head/scene.gltf'
export const defaultAvatarModelScale : number = 0.02
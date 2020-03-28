export default class AframeAsset {
        elementType : string
    id: string
    src: string
    className: string

    constructor(elementType : string, id : string, src : string, className? : string){

        // Add this to the vuex store of assets
        this.elementType = elementType
        this.id = id
        this.src = src
        this.className = className ? className : ''
    }
}
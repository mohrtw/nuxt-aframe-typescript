export default class AvatarSchema {
    template: string
    components: AvatarSchemaComponent[]

    constructor(templateID = 'avatar-template', components = defaultComponents) {
        this.template = '#' + templateID
        this.components = defaultComponents
    }

    addComponent(component: AvatarSchemaComponent) {
        this.components.push(component)
    }

    // TODO : removeComponent
    // removeComponent(component: AvatarSchemaComponent) {
    // }
}

export class AvatarSchemaComponent {
    component: string
    constructor(component = "position") {
        this.component = component
    }
}

export const defaultComponents: AvatarSchemaComponent[] = [
        new AvatarSchemaComponent("position"),
        new AvatarSchemaComponent("rotation"),
    ]
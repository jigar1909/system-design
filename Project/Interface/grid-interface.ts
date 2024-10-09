import { ButtonInterface } from "./custom-button-interface"


export interface GridInterface {
    cellType: string,
    viewText: boolean,
    viewLeadingIcon: boolean,
    viewTrailingIcon: boolean,
    viewButton: boolean,
    viewChip: boolean,
    viewAvatar: boolean,
    iconPath?: string,
    buttonConfig?: ButtonInterface,
    avatarConfig?: {
        id: string | number,
        size: string,
        imagePath: string,
        altText: string
    },
    text?: string | number,
    subText?: string | number,
    interactiveLink?: string,
    interactiveLinkTarget?: string,
    chipClicked?(evt: any): any,
    linkClicked?(evt: any): any,
    buttonClicked?(evt: any): any,
    avatarClicked?(evt: any): any
}

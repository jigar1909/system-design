import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { CustomButtonComponent } from '../../Project/components/custom-button/custom-button.component';

const meta: Meta<CustomButtonComponent> = {
    title: 'Custom Button',
    component: CustomButtonComponent,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ['primary', 'outline', 'transparent'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
        state: {
            options: ['default', 'error', 'disabled'],
            control: { type: 'radio' },
        },
        isSubmit: {
            options: [true, false],
            control: { type: 'boolean' },
        },
        onClickEvent: {
            action: "onClickEvent"
        },
        onMouseInEvent: {
            action: "onMouseInEvent"
        },
        onMouseOutEvent: {
            action: "onMouseOutEvent"
        },
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<app-custom-button ${argsToTemplate(args)}></app-custom-button>`
    }),
};

export default meta;
type Story = StoryObj<CustomButtonComponent>;


export const default_button: Story = {
    args: {
        text: "Button",
        type: "primary",
        size: "medium",
        state: "normal",
    }
};

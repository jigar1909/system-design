import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

import { CardComponent } from '../../Project/components/Card/card/card.component';


const meta: Meta<CardComponent> = {
    title: 'card',
    component: CardComponent,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ['Priamry', 'Card Image & Description',  'Card Title & Description'],
            control: { type: 'radio' },
        },
    },
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<app-card ${argsToTemplate(args)}></app-card>`
    }),
};

export default meta;
type Story = StoryObj<CardComponent>;


export const default_card: Story = {
    args: {
        type: "Priamry",
    }
};



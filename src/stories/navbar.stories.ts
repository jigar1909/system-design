import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { NavbarComponent } from '../../Project/components/navbar/navbar.component';

const meta: Meta<NavbarComponent> = {
    title: 'Navbar',
    component: NavbarComponent,
    tags: ['autodocs'],
    
    render: (args) => ({
        props: {
            ...args,
        },
        template: `<app-navbar ${argsToTemplate(args)}></app-navbar>`
    }),
};

export default meta;
type Story = StoryObj<NavbarComponent>;


export const default_navbar: Story = {
    args: {
        showButtons: false, 
    }
};

export const navbar_with_button: Story = {
    args: {
        showButtons: true,     
    }
};



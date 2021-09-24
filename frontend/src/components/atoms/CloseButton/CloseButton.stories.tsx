import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CloseButton from './CloseButton';
import propTypes from './CloseButton.types';

export default {
    title: 'Atoms/CloseButton',
    component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args: propTypes) => <CloseButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    defaultBackgroundColor: '#fffffff',
    defaultColor: '#0070eb',
    altBackgroundColor: '#d4d4db',
    altColor: '#003f85'
}

export const Hover = Template.bind({});
Hover.args = {
    defaultBackgroundColor: '#fffffff',
    defaultColor: '#003f85'
}

export const Active = Template.bind({});
Active.args = {
    defaultBackgroundColor: '#d4d4db',
    defaultColor: '#003f85'
}
import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta  } from '@storybook/react';
import PriceBadge from './PriceBadge';
import PriceBadgeProps from './PriceBadge.types';

const Container = styled.div<any>`
    width: 6rem;
    height: 6rem;
    background-color: white;
`;

export default {
    title: 'Atoms/PriceBadge',
    component: PriceBadge,
} as ComponentMeta<typeof PriceBadge>;

const Template: ComponentStory<typeof PriceBadge> = (args: PriceBadgeProps) => {
    return (
        <div style={{backgroundColor: 'white', width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', justifyItems: 'center'}}> 
            <Container> 
                <PriceBadge {...args} /> 
            </Container> 
        </div>
    );
}

export const Default = Template.bind({});
Default.args = {
    price: 12,
    currency: 'USD',
};
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import ProductSummary from './ProductSummary';
import propTypes from './ProductSummary.types';

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 90vh;
`;

const Container = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 12vw;
    }
`;

export default {
    title: 'Atoms/ProductSummary',
    component: ProductSummary,
} as ComponentMeta<typeof ProductSummary>;

const Template: ComponentStory<typeof ProductSummary> = (args: propTypes) => {
    return (
        <Section>
            <Container>
                <ProductSummary {...args} />
            </Container>
        </Section>
    );
};

export const Default = Template.bind({});
Default.args = {
    list: [
        'ham',
        'swiss cheese',
        'tomato',
        'onion',
        'lettuce',
        'mayo',
    ],
};
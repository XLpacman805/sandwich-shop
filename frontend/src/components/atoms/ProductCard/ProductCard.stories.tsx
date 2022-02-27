import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCard from './ProductCard';
import propTypes from './ProductCard.types';

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
    title: 'Atoms/ProductCard',
    component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args: propTypes) => {
    return (
        <Section>
            <Container>
                <ProductCard {...args} />
            </Container>
        </Section>
    );
}

export const Default = Template.bind({});
Default.args = {
    productName: 'BLT',
    productDescription: 'A classic sandwich made of bacon, lettuce, and tomato.',
    dataTestId: 'product-card-test-id'
}
import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductSticker from './ProductSticker';
import propTypes from './ProductSticker.types';

const Section = styled.section`
    width: 100%;
    height: 91vh;
    background-color: white;
    position: relative;
    background: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png") no-repeat center center;
`;

const Container = styled.div`
    min-width: 75%;
    position: absolute;
    bottom: 2%;
    left: 2%;

    @media (min-width: 768px) {
        min-width: 377px;
    }
`;

export default {
    title: 'Atoms/ProductSticker',
    component: ProductSticker,
} as ComponentMeta<typeof ProductSticker>;

const Template: ComponentStory<typeof ProductSticker> = (args: propTypes) => {
    return (
        <Section>
            <Container>
                <ProductSticker {...args} />
            </Container>
        </Section>
    );
}

export const Default = Template.bind({});
Default.args = {
    productName: 'Artisan Ham Sandwich',
    productPrice: 7.99,
};
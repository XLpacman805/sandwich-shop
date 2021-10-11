import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import QuantitySelector from './QuantitySelector';
import propTypes from './QuantitySelector.types';

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 90vh;
`;

const Container = styled.div<any>`
    width: 100%;
    @media (min-width: 768px) {
        width: 16vw;
    }
`;

export default {
    title: 'Atoms/QuantitySelector',
    component: QuantitySelector,
    argTypes: {
        initialValue: {
            table: {
                disable: true,
            }
        }
    }
} as ComponentMeta<typeof QuantitySelector>;

const Template: ComponentStory<typeof QuantitySelector> = (args: propTypes) => {
    return (
        <Section>
            <Container>
                <QuantitySelector {...args} />
            </Container>
        </Section>
    );
}

export const Default = Template.bind({});
Default.args = {
    label: 'Quantity',
    initialValue: 1,
    minumum: 1,
    maximum: 4,
};
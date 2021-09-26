import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddToBagButton from './AddToBagButton';
import { props, styleDefaults } from './AddToBagButton.types';

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 90vh;
`;

const ButtonContainer = styled.div<any>`
    width: 100%;
    @media (min-width: 768px) {
        width: 16vw;
    }
`;

export default {
    title: 'Atoms/AddToBagButton',
    component: AddToBagButton,
} as ComponentMeta<typeof AddToBagButton>;

const Template: ComponentStory<typeof AddToBagButton> = (args: props) => {
    return (
        <Section>
            <ButtonContainer>
                <AddToBagButton {...args}/>
            </ButtonContainer>
        </Section>
    );
};
export const Default = Template.bind({});
Default.args = {
    props: {
        text: 'Add to Bag',
        price: 10.00,
        onClick: () => {console.log('clicked')},
        disabled: false,
    },
    styleProps: styleDefaults,
};

export const Disabled = Template.bind({});
Disabled.args = {
    props: {
        text: 'Add to Bag',
        price: 10.00,
        onClick: () => {console.log('clicked')},
        disabled: true,
    },
    styleProps: styleDefaults,
};
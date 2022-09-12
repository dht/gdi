import React from 'react';
import { Container, Option, Title } from './Filter.style';

export type FilterProps = {};

export function Filter(_props: FilterProps) {
    return (
        <Container className='Filter-container' data-testid='Filter-container'>
            <Title>Age</Title>
            <Option>0 - 18</Option>
            <Option>18 - 25</Option>
            <Option>25 - 35</Option>
            <Option>35 - 50</Option>
            <Option>50 - 65</Option>
            <Option>65 - 75</Option>
            <Option>75+</Option>
        </Container>
    );
}

export default Filter;

import React from 'react';
import { Container } from './Rating.style';

export type RatingProps = {
    value: number;
};

export function Rating(props: RatingProps) {
    const { value } = props;

    function renderStar(index: number) {
        return (
            <svg
                key={index}
                width='20px'
                height='20px'
                viewBox='0 0 16 15'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
            >
                <polygon
                    id='Path'
                    fill='#000'
                    points='7.71305335 0 9.5338252 5.60385925 15.4261067 5.60385925 10.6591373 9.06719637 12.4800227 14.6710556 7.71305335 11.2077185 2.946084 14.6710556 4.76685585 9.06719637 0 5.60385925 5.8922815 5.60385925'
                ></polygon>
            </svg>
        );
    }

    function renderStars() {
        return [0, 1, 2, 3, 4].map((index) => {
            return renderStar(index);
        });
    }

    return (
        <Container
            percent={(value * 100) / 5}
            className='Rating-container'
            data-testid='Rating-container'
        >
            {renderStars()}
        </Container>
    );
}

export default Rating;

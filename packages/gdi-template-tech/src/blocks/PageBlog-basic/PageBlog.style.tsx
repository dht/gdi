import styled from 'styled-components';
import { PageBlogColors } from './PageBlog';

export const Container = styled.div<{ colors: PageBlogColors }>`
    flex: 1;
    background-color: white;
    color: #333;
    display: flex;

    @media (max-width: 768px) {
        height: auto;
        max-height: none;
        padding: 80px 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

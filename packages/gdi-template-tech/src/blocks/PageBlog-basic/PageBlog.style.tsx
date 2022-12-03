import styled from 'styled-components';
import { PageBlogColors } from './PageBlog';

export const Wrapper = styled.div<{ colors: PageBlogColors }>`
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

import { ThemeProvider } from 'styled-components';
import { BoardContainer } from '../../components/Board/Board.container';
import { Wrapper } from './Gdi.style';
import { lightTheme } from './Gdi.themes';
import 'react-toastify/dist/ReactToastify.css';

export type GdiProps = {};

export function Gdi(_props: GdiProps) {
    return (
        <Wrapper className='Gdi-wrapper' data-testid='Gdi-wrapper'>
            <ThemeProvider theme={lightTheme}>
                <BoardContainer />
            </ThemeProvider>
        </Wrapper>
    );
}

export default Gdi;

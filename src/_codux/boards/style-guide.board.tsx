import { createBoard } from '@wixc3/react-board';
import StyleGuide_board_module from './style-guide.board.module.scss';

export default createBoard({
    name: 'StyleGuide',
    Board: () => <div className={StyleGuide_board_module.root}></div>,
    isSnippet: true,
});

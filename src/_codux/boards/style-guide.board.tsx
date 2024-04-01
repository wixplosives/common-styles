import '../../styles/common/variables.css';
import '../../styles/common/style-guide.css';
import { createBoard } from '@wixc3/react-board';
import StyleGuide_board_module from './style-guide.board.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'StyleGuide',
    Board: () => (
        <div className={Classnames(StyleGuide_board_module.root)}>
            <div className={StyleGuide_board_module.pageHeader}>
                <h1 className={StyleGuide_board_module.TitleHeader}>Style Guide</h1>
                <span className={StyleGuide_board_module.logo}>LOGO</span>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src="/src/assets/react.svg" />
                    <h2>Typography</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Defines the fonts used for headings, body text, labels, etc., including size,
                    weight, and spacing.
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Font Family</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div className={StyleGuide_board_module.FontFamilyContainer}>
                        <span className={StyleGuide_board_module.FontFamilyAa}>Aa</span>
                        <span>Open Sans</span>
                    </div>
                    <div className={StyleGuide_board_module.FontFamilyContainer}>
                        <span className={StyleGuide_board_module.FontFamilyAa}>Aa</span>
                        <span>Open Sans</span>
                    </div>
                    <div className={StyleGuide_board_module.FontFamilyContainer}>
                        <span className={StyleGuide_board_module.FontFamilyAa}>Aa</span>
                        <span>Open Sans</span>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Main Heading / h1</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <h1 className={Classnames('h1Normal', StyleGuide_board_module.margin)}>
                            Heading 42
                        </h1>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            Open Sans - Normal{' '}
                        </span>
                    </div>
                    <div>
                        <h1 className={Classnames('h1Light', StyleGuide_board_module.margin)}>
                            Heading 42
                        </h1>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            Open Sans - light{' '}
                        </span>
                    </div>
                    <div>
                        <h1 className={Classnames('h1Bold', StyleGuide_board_module.margin)}>
                            Heading 42
                        </h1>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            Open Sans - Bold{' '}
                        </span>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Subheading / h2</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <h2 className={Classnames('h2Normal', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            Open Sans - Normal{' '}
                        </span>
                    </div>
                    <div>
                        <h2 className={Classnames('h2Light', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            Open Sans - light{' '}
                        </span>
                    </div>
                    <div>
                        <h2 className={Classnames('h2Bold', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            Open Sans - Bold{' '}
                        </span>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Body / p</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <p className={Classnames('pNormal', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            Open Sans - Normal{' '}
                        </span>
                    </div>
                    <div>
                        <p className={Classnames('pLight', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <span className={StyleGuide_board_module.subtitleFontType}>
                            Open Sans - light{' '}
                        </span>
                    </div>
                    <div>
                        <p className={Classnames('pBold', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <span className={StyleGuide_board_module.subtitleFontType}>
                            Open Sans - Bold{' '}
                        </span>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Smaller Text</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <p className={Classnames('smallNormal', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <span className={StyleGuide_board_module.subtitleFontType}>
                            Open Sans - Normal{' '}
                        </span>
                    </div>
                    <div>
                        <p className={Classnames('smallLight', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            Open Sans - light{' '}
                        </span>
                    </div>
                    <div>
                        <p className={Classnames('smallBold', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <span className={StyleGuide_board_module.subtitleValue}>
                            Open Sans - Bold{' '}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1014,
        canvasWidth: 1021,
        canvasHeight: 1656,
        windowHeight: 1659,
    },
});

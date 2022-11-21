import React from 'react';
import { Column, Container, P, Row, Quote } from './ArticleBody.style';

export type ArticleBodyProps = {};

export function ArticleBody(_props: ArticleBodyProps) {
    return (
        <Container
            className='ArticleBody-container'
            data-testid='ArticleBody-container'
        >
            <Row>
                <Column>
                    <P>
                        Gran Turismo 7, one of the biggest PlayStation releases
                        of the year so far, has been undergoing server
                        maintenance for hours because of an issue found with the
                        game’s latest update. “Due to an issue found with Update
                        1.07, we are extending the current server maintenance
                        period,” reads a notice on the Gran Turismo website from
                        this morning. “We will confirm the completion time as
                        soon as possible.”
                    </P>
                    <P>
                        The maintenance means that much of Gran Turismo 7,
                        including its career mode and multiplayer, is
                        unplayable, and it’s unclear when the maintenance might
                        end. Developer Polyphony Digital hasn’t detailed what
                        the underlying issue might be, and Sony didn’t
                        immediately reply to a request for comment.
                    </P>
                    <P>
                        <Quote>
                            UPDATE 1.07 ADJUSTED REWARDS FOR SOME RACES
                        </Quote>
                        According to Polyphony’s patch notes, Update 1.07 adds a
                        number of fixes and changes, including a new broadcast
                        mode that removes all licensed music tracks. However,
                        Polyphony says it also adjusted the rewards for some
                        events, and players appear to have found that for many
                        races, you now get fewer credits, making it more
                        difficult to save up in-game currency for more expensive
                        cars.
                    </P>
                    <P>
                        Scanning through the Gran Turismo subreddit, it’s clear
                        that many fans are particularly unhappy with the credits
                        changes in the patch. Sony does sell in-game credits for
                        real-world dollars that could help you get the cars you
                        want, but those microtransactions are on top of the $60
                        or $70 you’re already paying just to buy the game
                        (depending on if you get it for PS4 or PS5). It’s
                        unclear if Polyphony will be making changes to the
                        credit payouts in response to fan outcry.
                    </P>
                </Column>
                <Column></Column>
            </Row>
        </Container>
    );
}

export default ArticleBody;

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GuidanceRanking, GuidanceRankingProps } from './GuidanceRanking';
import { BaseComponentDriver } from 'testing-base';

export class GuidanceRankingDriver extends BaseComponentDriver {
    private props: Partial<GuidanceRankingProps> = {};

    constructor() {
        super('GuidanceRanking');
    }

    when: any = {
        rendered: () => {
            render(<GuidanceRanking {...(this.props as GuidanceRankingProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<GuidanceRanking {...(this.props as GuidanceRankingProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GuidanceRankingProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}

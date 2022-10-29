import React, { useContext, useEffect } from 'react';
import { Multi, Form, Theme, Prompt, PieMenu, Buckets } from '@gdi/web-ui';
import { LanguageCatalog } from '@gdi/language';
import 'main.language';

export function Dev() {
    const dispatch = (action: any) => {
        console.log('action ->', action);
    };

    return (
        <Theme>
            <LanguageCatalog />
            {/* <Prompt formComponent={Form} />

                <div>
                    <PieMenu
                        items={items}
                        onSelect={(item: IOption) => {
                            console.log(item);
                        }}
                    />
                </div>
            </> */}
        </Theme>
    );
}

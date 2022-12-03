import React, { useContext, useEffect, useMemo } from 'react';
import { AppContext, AppContextProvider } from '../../context/App.context';
import {
    methods,
    languages,
    keysByLanguageApp1,
    keysByLanguageApp2,
    v as _v,
} from './LanguageCatalog.data';
import { Wrapper, Table } from './LanguageCatalog.style';
import { LanguageContextProvider } from '../../context/Language.context';
import { useLanguage } from '../../hooks/useLanguage';
import { I18nBuilder } from '../../builders/I18nBuilder';
import classnames from 'classnames';

export type CatalogProps = {};

const v = _v;

export function TableValues(props: any) {
    const { languageId } = props;
    const { m, n, d, h, t } = useLanguage();
    const { state } = useContext(AppContext);
    const { appId } = state;

    function runCode(method: string) {
        try {
            const evalResult = eval(method);

            return {
                evalResult,
            };
        } catch (_err) {
            console.log('_err ->', _err);

            return {
                evalResult: 'error',
                isError: true,
            };
        }
    }

    function renderDivider(key: string) {
        return (
            <tr key={key}>
                <td>=========</td>
            </tr>
        );
    }

    function renderRow(method: string) {
        if (method === '=====') {
            return renderDivider(method);
        }

        const { evalResult, isError } = runCode(method);

        const className = classnames({
            error: isError,
        });

        return (
            <tr key={method}>
                <td className={className}>{evalResult}</td>
            </tr>
        );
    }

    function renderRows() {
        return methods.map((method) => renderRow(method));
    }

    return (
        <Table cellPadding={0} cellSpacing={0} key={languageId}>
            <thead>
                <tr>
                    <th>{languageId}</th>
                </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
        </Table>
    );
}

export function TableKeys() {
    function renderRow(method: string) {
        return (
            <tr key={method}>
                <td className='key'>{method}</td>
            </tr>
        );
    }

    function renderRows() {
        return methods.map((method) => renderRow(method));
    }

    return (
        <Table cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>
                    <th>key</th>
                </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
        </Table>
    );
}

export function LanguageCatalog(_props: CatalogProps) {
    const { setAppId } = useContext(AppContext);

    useEffect(() => {
        setAppId('nice');
    }, []);

    const keys = useMemo(() => {
        const builder = new I18nBuilder();

        builder
            .withKeysByLanguage('app1', keysByLanguageApp1)
            .withKeysByLanguage('app2', keysByLanguageApp2);

        return builder.build();
    }, []);

    function renderTable(languageId: string) {
        return <TableValues key={languageId} languageId={languageId} />;
    }

    function renderTables() {
        return <>{languages.map((languageId) => renderTable(languageId))}</>;
    }

    return (
        <Wrapper className='Catalog-wrapper' data-testid='Catalog-wrapper'>
            <LanguageContextProvider
                config={{}}
                options={{}}
                keys={keys}
                id='main'
                initialLanguageId='en'
            >
                <AppContextProvider appId='good'>
                    <TableKeys />
                    {renderTables()}
                </AppContextProvider>
            </LanguageContextProvider>
        </Wrapper>
    );
}

export default LanguageCatalog;

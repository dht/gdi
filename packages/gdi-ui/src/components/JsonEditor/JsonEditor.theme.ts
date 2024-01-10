import {
  editorBackground,
  editorForeground,
  editorInactiveSelection,
  editorSelectionHighlight, // @ts-expect-error
} from 'monaco-editor/esm/vs/platform/theme/common/colorRegistry';

// @ts-expect-error
import type { IStandaloneThemeData } from 'monaco-editor/esm/vs/editor/standalone/common/standaloneTheme';

export const vs_studio_dark: IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: false,
  rules: [
    { token: '', foreground: 'D4D4D4', background: '1E1E2E' },
    { token: 'invalid', foreground: 'f44747' },
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },

    { token: 'variable', foreground: '74B0DF' },
    { token: 'variable.predefined', foreground: '4864AA' },
    { token: 'variable.parameter', foreground: '9CDCFE' },
    { token: 'constant', foreground: '569CD6' },
    { token: 'comment', foreground: '608B4E' },
    { token: 'number', foreground: 'B5CEA8' },
    { token: 'number.hex', foreground: '5BB498' },
    { token: 'regexp', foreground: 'B46695' },
    { token: 'annotation', foreground: 'cc6666' },
    { token: 'type', foreground: '3DC9B0' },

    { token: 'delimiter', foreground: 'DCDCDC' },
    { token: 'delimiter.html', foreground: '808080' },
    { token: 'delimiter.xml', foreground: '808080' },

    { token: 'tag', foreground: '569CD6' },
    { token: 'tag.id.pug', foreground: '4F76AC' },
    { token: 'tag.class.pug', foreground: '4F76AC' },
    { token: 'meta.scss', foreground: 'A79873' },
    { token: 'meta.tag', foreground: 'CE9178' },
    { token: 'metatag', foreground: 'DD6A6F' },
    { token: 'metatag.content.html', foreground: '9CDCFE' },
    { token: 'metatag.html', foreground: '569CD6' },
    { token: 'metatag.xml', foreground: '569CD6' },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'key', foreground: '9CDCFE' },
    { token: 'string.key.json', foreground: '9CDCFE' },
    { token: 'string.value.json', foreground: 'CE9178' },

    { token: 'attribute.name', foreground: '9CDCFE' },
    { token: 'attribute.value', foreground: 'CE9178' },
    { token: 'attribute.value.number.css', foreground: 'B5CEA8' },
    { token: 'attribute.value.unit.css', foreground: 'B5CEA8' },
    { token: 'attribute.value.hex.css', foreground: 'D4D4D4' },

    { token: 'string', foreground: 'CE9178' },
    { token: 'string.sql', foreground: 'FF0000' },

    { token: 'keyword', foreground: '569CD6' },
    { token: 'keyword.flow', foreground: 'C586C0' },
    { token: 'keyword.json', foreground: 'CE9178' },
    { token: 'keyword.flow.scss', foreground: '569CD6' },

    { token: 'operator.scss', foreground: '909090' },
    { token: 'operator.sql', foreground: '778899' },
    { token: 'operator.swift', foreground: '909090' },
    { token: 'predefined.sql', foreground: 'FF00FF' },
  ],
  colors: {
    [editorBackground]: '#1E1E2E',
    [editorForeground]: '#D4D4D4',
    [editorInactiveSelection]: '#3A3D41',
    [editorSelectionHighlight]: '#ADD6FF26',
  },
};

export const vs_studio_light: IStandaloneThemeData = {
  base: 'vs',
  inherit: false,
  rules: [
    { token: '', foreground: '1E1E1E', background: 'FBFBFB' },
    { token: 'invalid', foreground: 'f44747' },
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },

    { token: 'variable', foreground: '74B0DF' },
    { token: 'variable.predefined', foreground: '4864AA' },
    { token: 'variable.parameter', foreground: '461F93' },
    { token: 'constant', foreground: '569CD6' },
    { token: 'comment', foreground: '608B4E' },
    { token: 'number', foreground: 'B5CEA8' },
    { token: 'number.hex', foreground: '5BB498' },
    { token: 'regexp', foreground: 'B46695' },
    { token: 'annotation', foreground: 'cc6666' },
    { token: 'type', foreground: '3DC9B0' },

    { token: 'delimiter', foreground: '3A3A3A' },
    { token: 'delimiter.html', foreground: '808080' },
    { token: 'delimiter.xml', foreground: '808080' },

    { token: 'tag', foreground: '569CD6' },
    { token: 'tag.id.pug', foreground: '4F76AC' },
    { token: 'tag.class.pug', foreground: '4F76AC' },
    { token: 'meta.scss', foreground: 'A79873' },
    { token: 'meta.tag', foreground: '626B78' },
    { token: 'metatag', foreground: 'DD6A6F' },
    { token: 'metatag.content.html', foreground: '461F93' },
    { token: 'metatag.html', foreground: '569CD6' },
    { token: 'metatag.xml', foreground: '569CD6' },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'key', foreground: '461F93' },
    { token: 'string.key.json', foreground: '461F93' },
    { token: 'string.value.json', foreground: '626B78' },

    { token: 'attribute.name', foreground: '461F93' },
    { token: 'attribute.value', foreground: '626B78' },
    { token: 'attribute.value.number.css', foreground: 'B5CEA8' },
    { token: 'attribute.value.unit.css', foreground: 'B5CEA8' },
    { token: 'attribute.value.hex.css', foreground: 'D4D4D4' },

    { token: 'string', foreground: '626B78' },
    { token: 'string.sql', foreground: 'FF0000' },

    { token: 'keyword', foreground: '569CD6' },
    { token: 'keyword.flow', foreground: 'C586C0' },
    { token: 'keyword.json', foreground: '626B78' },
    { token: 'keyword.flow.scss', foreground: '569CD6' },

    { token: 'operator.scss', foreground: '909090' },
    { token: 'operator.sql', foreground: '778899' },
    { token: 'operator.swift', foreground: '909090' },
    { token: 'predefined.sql', foreground: 'FF00FF' },
  ],
  colors: {
    [editorBackground]: '#FBFBFB',
    [editorForeground]: '#1E1E1E',
    [editorInactiveSelection]: '#D4D4D4',
    [editorSelectionHighlight]: '#ADD6FF26',
  },
};

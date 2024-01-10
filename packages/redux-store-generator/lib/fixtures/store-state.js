"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
exports.state = {
    appState: {
        isLoading: true,
        isSaving: true,
    },
    products: {
        '1': {
            id: '1',
            title: 'first product',
        },
    },
    logs: [
        {
            id: '1',
        },
    ],
    chats: {
        '1': {
            id: '1',
            title: 'chat 1',
            items: [
                {
                    id: '1',
                    isMe: true,
                    content: '',
                    timestamp: 0,
                },
            ],
        },
    },
};
exports.default = exports.state;

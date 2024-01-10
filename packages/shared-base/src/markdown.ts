export const removeHtmlFromMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');

    const newContent = lines
        .filter((line) => {
            return !line.match(/<[^>]*>?/gm);
        })
        .join('\n');

    return newContent;
};

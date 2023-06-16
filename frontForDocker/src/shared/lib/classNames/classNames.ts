type TMods = Record<string, boolean | string>;

export const classNames = (className: string, mods: TMods = {}, additional: Array<string | undefined> = []): string => {
    return [
        className,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([className]) => className),
    ].join(' ');
};

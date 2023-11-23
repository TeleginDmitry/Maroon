type ModsType = Record<string, boolean | string>

function classNames(cls: string, mods?: ModsType, additional?: string[]) {
    const result = cls.length ? [cls] : []

    if (!mods) return result.join(' ')

    const modsKeys = Object.keys(mods)

    modsKeys.forEach((modCls) => {
        const value = mods[modCls]

        if (Boolean(value)) {
            result.push(modCls)
        }
    })

    if (Array.isArray(additional)) result.push(...additional)

    return result.join(' ')
}

export { classNames }

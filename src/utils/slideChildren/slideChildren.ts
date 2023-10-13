function slideChildren(slidesRef: React.RefObject<HTMLElement>) {
    if (!slidesRef.current) return []

    const childrens = slidesRef.current!.childNodes as NodeListOf<HTMLElement>
    const childrensArray = Array.from(childrens)

    return childrensArray
}

export { slideChildren }

import { ReactNode } from "react";

interface Props<T> {
    data: T[];
    renderItem: (item: T) => ReactNode;
    className?: string;
}

function BaseList<T>({ data, renderItem, className }: Props<T>) {
    return (
        <ul className={className}>
            {data.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}

export { BaseList };
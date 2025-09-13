'use client';

import { ReactNode } from 'react';

export const LinkButton = ({
    children,
    onClick,
}: {
    children: ReactNode;
    onClick: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={`flex justify-center px-2 py-2 cursor-pointer hover:bg-slate-100 font-light text-sm rounded`}
        >
            {children}
        </div>
    );
};

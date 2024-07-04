import { memo } from 'react';

// ? El memo hace skip del re-rendering cuando NO cambian los props

export const Small = memo(({ counter }) => {
    console.log('Me volví a dibujar :c');

    return (
        <small>{ counter }</small>
    )
})

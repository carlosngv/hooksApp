import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({ id, name, sprites = [] }) => {

    const h2Ref = useRef();
    const [boxSize, setboxSize] = useState({ width: 0, height: 0})

    useLayoutEffect(() => {
        const { height, width } = h2Ref.current.getBoundingClientRect();
        setboxSize({
            height, width
        });
    }, [id])

    return (
        <section
            style={{ height: 200, display: 'flex' }}
        >
            <h2 ref={ h2Ref} className="text-capitalize">
                #{ id } - { name }
            </h2>

            {/* imágenes */}
            { (sprites.length != 0) ?
                <div>
                    { sprites.map( imgUrl => ( <img key={ imgUrl } src={ imgUrl } alt={ name } /> )) }
                </div>
                : <h3>No sprites</h3> }

            <h5>{ JSON.stringify(boxSize) }</h5>

        </section>
    )
}

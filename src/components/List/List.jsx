const List = (props) => {

    const {items = []} = props

    if (!items.length) return null

    return (
        <ul className={"listWrapper"}>
            {items.map(el =>
                <li key={el}>{el}</li>
            )}
        </ul>
    )
}

export default List
type ButtonProps = {
    handleClick: () =>  void
    handleMouseOver?: (event: React.MouseEvent) => void
    handleMouseDown: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.handleClick} onMouseOver={props.handleMouseOver} onMouseDown={event => props.handleMouseDown(event, 1) }>CLick</button>
  )
}

export default Button
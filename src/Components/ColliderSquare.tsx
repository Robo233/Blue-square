type SquareProps = {
    idNumber: string
    top: string
    left: string
    width: string
    height: string
    isMoving?: boolean
}

export const ColliderSquare = (props: SquareProps) => {
    let idNumber = props.idNumber
   
   
    return (
        
      
        <div className="collider-cube, absolute bg-color bg-[#002e12]" id={idNumber} style={{top:props.top, left:props.left, width: props.width, height:props.height, display: "none"}} ></div>
        
        )
    
    
        
}


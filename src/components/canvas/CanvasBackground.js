
import { useRef, useEffect, useState } from "react"

const CanvasBackground = (props) => {

    const [ scroll, setScroll ] = useState(undefined);
    const [ mousePos, setMousePos ] = useState({x: 0, y: 0});
    const [ canvas, setCanvas ] = useState(undefined);
    const [ canvasContext, setCanvasContext ] = useState(undefined);
    const [ animStarted, setAnimStarted ] = useState(false);

    const canvasRef = useRef(null);

    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });  
    const handleScroll = () => setScroll(window.pageYOffset);

    // useEffect(() => {
    //     if(canvasContext) {

    //         canvasContext.clearRect(0, 0, canvas.width, canvas.height);


    //         canvasContext.fillStyle = 'red'
    //         canvasContext.beginPath();
    //         canvasContext.arc(mousePos.x, mousePos.y, 20, 0, 2 * Math.PI);
    //         canvasContext.fill();

    //         // canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    //         // canvasContext.fillRect(mousePos.x, mousePos.y, 10, 10);
    //     }

    // }, [mousePos])

    const points = [ 
        {x: ((window.innerWidth / 5) * 2 ), y: ((window.innerHeight / 5) * 2 )},
        {x: ((window.innerWidth / 5) * 2 ) + (window.innerWidth / 5), y: ((window.innerHeight / 5) * 2 )},
        {x: ((window.innerWidth / 5) * 2 ) + (window.innerWidth / 5), y: ((window.innerHeight / 5) * 2 ) + (window.innerHeight / 5)},
        {x: ((window.innerWidth / 5) * 2 ), y: ((window.innerHeight / 5) * 2 ) + (window.innerHeight / 5)},
        {x: ((window.innerWidth / 5) * 2 ) , y: ((window.innerHeight / 5) * 2 )}
    ];
    let pointIndex = 0;


    const drawNextPoint = () => {
        setTimeout(() => {

            let nextPoint = points[pointIndex++];

            console.log(`next point`)
            console.log(nextPoint)

            if((((pointIndex) % 5) === 0)) {
                console.log(`filling rect`)
                canvasContext.fill();
                canvasContext.beginPath();
            } else if (pointIndex === 1) {
                canvasContext.moveTo(nextPoint.x, nextPoint.y);
            } else {
                canvasContext.lineTo(nextPoint.x, nextPoint.y);
                canvasContext.stroke();
            }

            if(!(pointIndex === points.length)) {
                drawNextPoint();
            }
        }, 1000)
    }

    const drawStart = () => {
        canvasContext.fillStyle = 'coral';
        canvasContext.strokeStyle = 'coral';

        canvasContext.lineWidth = 20;
        drawNextPoint();
    }

    useEffect(() => {
        if(canvasContext && !animStarted) {
            drawStart();
        }
    }, [canvasContext])

    useEffect(() => {
        // HANDLE MOUSE MOVEMENT
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        // Get canvas element from ref
        setCanvas(canvasRef.current);
        const context = canvasRef.current.getContext('2d');
        setCanvasContext(context);
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        return () => {
            // REMOVE LISTENER ON UNMOUNT
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return(
        <canvas ref={canvasRef} className='CanvasBackground' />
    );
}

export default CanvasBackground;
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
        <Html
            as='div'
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <span className='canvas-loader'></span>
            <p
                style={{
                    fontSize: 16,
                    color: "oklch(0.7 0.2 200)", // Neon Cyan
                    fontWeight: 800,
                    marginTop: 40,
                    textShadow: "0 0 10px rgba(103,232,249,0.5)",
                    fontFamily: "Inter, sans-serif"
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default CanvasLoader;

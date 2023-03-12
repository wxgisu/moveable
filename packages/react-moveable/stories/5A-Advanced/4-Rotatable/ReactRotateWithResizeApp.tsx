import * as React from "react";
import Moveable, { DIRECTIONS} from "@/react-moveable";

export default function App() {
    return (
        <div className="root">
            <div className="target" style={{
                transformOrigin: "top center",
            }}>Target</div>
            <Moveable
                target={".target"}
                draggable={true}
                rotatable={{
                    renderDirections: DIRECTIONS,
                }}
                resolveAblesWithRotatable={{
                    resizable: ["nw", "ne", "sw", "se"],
                }}
                resizable={{
                    renderDirections: false,
                }}
                rotateAroundControls={true}
                onRender={e => {
                    e.target.style.cssText += e.cssText;

                }}
            />
        </div>
    );
}

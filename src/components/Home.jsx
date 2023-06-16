import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

function Home() {
    const mouth = useRef()

    useLayoutEffect(() => {
        let home = gsap.context(() => {
            gsap.to(".pupil", {duration: 1, repeat: -1, y: -6, x:-1.1, ease: "back. out( 1.7)" ,yoyo:true});
            gsap.to(".pupil-white", {duration: 0.5, repeat:-1,scale: 1.5,  ease: "slow( 0.7, 0.7, false)",yoyo:true });
            gsap.to(".pupil-sprinkle", {duration: 1, repeat:-1, x:1.1, ease: "back. out( 1.7)" ,yoyo:true});
            gsap.to(mouth.current, {duration: 1, repeat: -1, scale: 1.05, rotate: 1, ease: "slow.out", yoyo:true})
            gsap.to('.textChange', {duration: 1, color: "#84DCC6", repeat: -1, ease: "slow( 0.7, 0.7, false)", delay: 1, yoyo:true, repeatDelay: 2})
        })

        return () => home.revert()
    }, [])

    return (
        <>
        <section className="home-container">
        <div className="home-text">
        <h2>Hello, I'm <br /> Ayomide Jimoh </h2>
        <h1>I'm a <span className="textChange">software developer</span> who directs my creativity towards <span className="textChange">frontend development</span>. My focus revolves around creating <span className="textChange">user-friendly</span> and <span className="textChange">visually pleasing interfaces</span> using the latest <span className="textChange">frontend technologies</span>.
        </h1>
        </div>

        <div className="home-art">

            <div className="canvas">

                <div className="art">

                    <div className="face">
                    <div className="ear"></div>
                    <div className="ear"></div>

                        <div className="eye">
                            <div className="pupil">
                                <div className="pupil-white"></div>
                                <div className="pupil-sprinkle"></div>
                            </div>
                            </div>
                        <div className="eye">
                            <div className="pupil">
                            <div className="pupil-white"></div>
                            <div className="pupil-sprinkle"></div>
                            </div>
                            </div>

                        <div className="nose"></div>
                        <div className="mouth" ref={mouth}></div>
                    </div>

                    <div className="neck"></div>
                    <div className="arm"></div>
                    
                </div>

                <div className="art-background hidden"></div>
                </div>

            </div>
        </section>

        <section className="scroll">
            <div className="scroll-container">
            <h6>Scroll</h6>
            <div className="scroll-line"></div>
            </div>
        </section>
        </>
    )
}

export default Home
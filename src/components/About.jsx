import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function About() {
    const aboutInner = useRef();
    const aboutText = useRef();

    useLayoutEffect(() => {
        let about = gsap.context(() => {
            gsap.to(".about-text", {xPercent: 100, repeat: -1, duration: 5, ease: "linear", yoyo:true}).totalProgress(0.5);
            gsap.set(aboutInner.current, {xPercent: -50});
        }, aboutText)

        return () => {
            about.revert()         
        }
    }, []);

    useLayoutEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                start: "top top",
                invalidateOnRefresh: true,
            }
        });
        tl.fromTo(".about-me", {
            xPercent: "-100",
            opacity: 1,
        }, {xPercent: 0, duration: 1.5, delay: 0.2, ease: "sine.out", yoyo: true});
        tl.fromTo(".about-stacks", {
            xPercent: "100",
        }, {xPercent: "0", duration: 1, ease: "sine.out", yoyo: true});

        return () => {
            tl.revert()
        }
    }, [])


    return (
        <>
        <section className="about-container" id="about">

            <div className="about-animation" ref={aboutText}>
                <div className="about-inner" ref={aboutInner}>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                    <div className="about-text">
                        ABOUT ME
                    </div>
                </div>
            </div>

            <div className="about-content">
            <div className="about-me">
            <h2>Hey there, I'm Ayomide Jimoh ( Taj ). I'm eager to join your upcoming project as a <span className="about-me-color"> Frontend Web Developer</span>. My passion lies in developing sleek and modern web applications using <span className="about-me-color"> Javascript and React </span>. My goal is to devote myself entirely to my work and ensure that it becomes my identity. I'm eager to learn and committed to <span className="about-me-color"> delivering top-notch results </span>. I have successfully applied my skills in several projects, which serve as evidence of my capabilities and creativity. Take a look at the project section for some examples that highlight my expertise. <br /> <br /> I am currently available for <span className="about-me-color"> freelance, full-time, and part-time job positions</span>. If you come across any suitable opportunities that align with my skills and experience, I would greatly appreciate it if you could reach out to me without hesitation.</h2>
            </div>

            <div className="about-stacks">
                <h4>MY STACK</h4>
                <div className="stack-container">
                <div className="stacks">
                    <div className="stack">
                    <i class="fa-brands fa-html5"></i>
                        <h5>HTML</h5>
                    </div>
                    <div className="stack">
                    <i class="fa-brands fa-css3-alt"></i>
                        <h5>CSS</h5>
                    </div>
                    <div className="stack">
                    <i class="fa-brands fa-css3"></i>
                        <h5>TAILWIND</h5>
                    </div>
                    </div>

                    <div className="stacks">
                    <div className="stack">
                    <i class="fa-brands fa-square-js"></i>
                    <h5>JAVASCRIPT</h5>
                    </div>

                    <div className="stack">
                    <i class="fa-brands fa-react"></i>
                        <h5>REACT</h5>
                    </div>

                    <div className="stack">
                    <i class="fa-brands fa-github"></i>
                        <h5>GITHUB</h5>
                    </div>
                    </div>
                </div>
            </div>
            </div>

        </section>
        </>
    )
}

export default About
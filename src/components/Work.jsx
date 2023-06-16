import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Work() {
    const workInner = useRef();
    const workText = useRef();
    const [text] = useTypewriter({
        words: ['something new, so check back soon!', 'new projects, so stay tuned for more updates!'],
        loop: {},
        typeSpeed: 150,
        deleteSpeed: 100,
    });



    useLayoutEffect(() => {
        let work = gsap.context(() => {
            gsap.to(".work-text", {xPercent: -100, repeat: -1, duration: 5, ease: "linear", yoyo:true}).totalProgress(0.5);
            gsap.set(workInner.current, {xPercent: -50});
        }, workText)

        return () => {
            work.revert()         
        }
    }, []);

    return (
        <>
        <section className="work-container" id="work">

            <section className="work-animation" ref={workText}>
                <div className="work-inner" ref={workInner}>
                    <div className="work-text">
                        PROJECTS
                    </div>
                    <div className="work-text">
                        PROJECTS
                    </div>
                    <div className="work-text">
                        PROJECTS
                    </div>
                    <div className="work-text">
                        PROJECTS
                    </div>
                    <div className="work-text">
                        PROJECTS
                    </div>
                    <div className="work-text">
                        PROJECTS
                    </div>
                    <div className="work-text">
                        PROJECTS
                    </div>
                    <div className="work-text">
                        PROJECTS
                    </div>
                    <div className="work-text">
                        PROJECTS
                    </div>
                    <div className="work-text">
                        PROJECTS
                    </div>
                </div>
            </section>
            
            <section className="work-content">
                <div className="project-container">
                <div className="project-line"></div>

                <div className="hover:text-tiffanyBlue">
                    <div className="project">
                        <div className="project-desc">
                                <h4><a href="https://spin-finance.netlify.app/" target="_blank">Spin Finance</a></h4>
                        </div>
                        <div className="project-link">
                            <a href="https://github.com/tajscript/spin-finance" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://spin-finance.netlify.app/" target="_blank"><i class="fa-solid fa-arrow-right -rotate-45"></i></a>
                        </div>
                    </div>
                    <div className="description">
                    <p>This is a finance company's landing page that educates individuals on financial management and achieving financial freedom. It was developed using React and styled with Tailwind CSS and GSAP.</p>
                    </div>
                    </div>
                    
                    <div className="project-line"></div>

                    <div className="hover:text-tiffanyBlue">
                    <div className="project">
                        <div className="project-desc">
                                <h4><a href="https://todo-vault.netlify.app/" target="_blank">ToDo Vault</a></h4>
                        </div>

                        <div className="project-link">
                        <a href="https://github.com/tajscript/to-do-vault" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://todo-vault.netlify.app/" target="_blank"><i class="fa-solid fa-arrow-right -rotate-45"></i></a>
                        </div>
                    </div>
                    <div className="description">
                    <p>This is a task management app that assists in organizing daily tasks. It offers various functionalities such as editing, deleting, and marking tasks as completed. The app was developed using React and styled using Tailwind CSS.</p>
                    </div>
                    </div>

                    <div className="project-line"></div>

                    <div className="hover:text-tiffanyBlue">
                    <div className="project">
                        <div className="project-desc">
                                <h4><a href="#" target="_blank">My Portfolio</a></h4>
                        </div>
                        <div className="project-link">
                        <a href="https://github.com/tajscript/my-portfolio" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://tajscript.com/" target="_blank"><i class="fa-solid fa-arrow-right -rotate-45"></i></a>
                        </div>
                    </div>
                    <div className="description">
                    <p>I have personally crafted this portfolio with the intention of highlighting my expertise and showcasing my web development skills. This portfolio, built with React, Vanilla CSS, Tailwind CSS, and GSAP, serves as a platform to create awareness about my capabilities.</p>
                    </div>
                    </div>
                    <div className="project-line"></div>
                    <h5>I'm always working on <span> {text} </span><Cursor /></h5>
                </div>
            </section>
        </section>
        </>
    )
}

export default Work
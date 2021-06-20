import React from "react";
//components
import NextButton from "./NextButton";
import PrevButton from "./PreviousButton";

export default function index({ section, setSection, animate, setAnimate }) {
    return (
        <>
            {section === 1 && (
                <NextButton
                    animate={animate}
                    setAnimate={setAnimate}
                    section={section}
                    setSection={setSection}
                />
            )}
            {section === 2 && (
                <>
                    <NextButton
                        animate={animate}
                        setAnimate={setAnimate}
                        section={section}
                        setSection={setSection}
                    />
                    <PrevButton
                        animate={animate}
                        setAnimate={setAnimate}
                        section={section}
                        setSection={setSection}
                    />
                </>
            )}
            {section === 3 && (
                <>
                    <NextButton
                        animate={animate}
                        setAnimate={setAnimate}
                        section={section}
                        setSection={setSection}
                    />
                    <PrevButton
                        animate={animate}
                        setAnimate={setAnimate}
                        section={section}
                        setSection={setSection}
                    />
                </>
            )}
            {section === 4 && (
                <>
                    <NextButton
                        animate={animate}
                        setAnimate={setAnimate}
                        section={section}
                        setSection={setSection}
                    />
                    <PrevButton
                        animate={animate}
                        setAnimate={setAnimate}
                        section={section}
                        setSection={setSection}
                    />
                </>
            )}
            {section === 5 && (
                <>
                    <PrevButton
                        animate={animate}
                        setAnimate={setAnimate}
                        section={section}
                        setSection={setSection}
                    />
                </>
            )}
        </>
    );
}

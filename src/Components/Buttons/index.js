import React from "react";
//components
import NextButton from "./NextButton";
import PrevButton from "./PreviousButton";

export default function index({ section }) {
    return (
        <>
            {section === 1 && <NextButton />}
            {section === 2 && (
                <>
                    <NextButton />
                    <PrevButton />
                </>
            )}
            {section === 3 && (
                <>
                    <NextButton />
                    <PrevButton />
                </>
            )}
            {section === 4 && (
                <>
                    <NextButton />
                    <PrevButton />
                </>
            )}
            {section === 5 && (
                <>
                    <PrevButton />
                </>
            )}
        </>
    );
}

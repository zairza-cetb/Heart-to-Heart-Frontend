import React, { useState } from 'react'
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
const Loader = (props) => {


    const override = css`
        display: block;
       
    `;

    const { message } = props;
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col">
            <div className="sweet-loading flex items-center justify-center">
                <ScaleLoader color={props.color} loading={true} css={override} height={70} width={8} radius={4}/>
            </div>
            <div className="mx-auto mt-4 text-2xl text-light">
                {message}
            </div>
        </div>
    )
}

export default Loader

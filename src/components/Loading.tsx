import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    .bounce {
        /* display circles horizontally across the same space*/
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        width: 100px;
        height: 100px;
    }

    div {
        position: relative;
        margin: auto;
        display: block;
        margin-top: 30%;
        width: 600px;
        height: 420px;
        background: none;
    }

    /* the balls */
    .bounce div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        animation: bouncer 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate;
    }

    /* create a stagger to delay one before the other by setting an animation-delay*/

    .bounce div:nth-child(1) {
        background: #fce4ec;
    }

    .bounce div:nth-child(2) {
        animation-delay: 0.2s;
        background: #f8bbd0;
    }

    .bounce div:nth-child(3) {
        animation-delay: 0.3s;
        background: #f48fb1;
    }

    .bounce div:nth-child(4) {
        animation-delay: 0.4s;
        background: #f06292;
    }

    @keyframes bouncer {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100px);
        }
    }

    @media all and (max-width: 600px) {
        div {
            margin-top: 110px;
            width: 250px;
            height: 175px;
        }
    }
`;

const Loading: React.FC = () => {
    return (
        <Wrapper>
            <div>
                <div className="bounce">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Loading;

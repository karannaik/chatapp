import React from 'react';
import xLogo from '../../icons/x_logo.png';
import oLogo from '../../icons/o_logo.png';

interface Props {
    value: number,
    index: number,
    onClick: (cellId: number) => void
}

export const Cell : React.FC<Props> = (props:Props) => {

    const logo = props.value == 0 ? undefined : (props.value == 1 ? xLogo : oLogo);

    return (
        <div>
            <img src={logo}
                 width={"100px"}
                 height={"100px"}
                 onClick={() => props.onClick(props.index)}
            />
        </div>
    );
};
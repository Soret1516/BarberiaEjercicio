import {useGet} from "../servicios/useGet";

export const Citas = () => {


    const data =useGet('http://localhost:3100/citas');
    console.log(data);
    return (
        <>
            <h1>Citas</h1>
        </>
    );
}
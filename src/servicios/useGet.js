import {useEffect, useRef, useState} from "react";
import axios from "axios";

export const useGet = (url) => {

    const mount = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return ()=>{
            (mount.current = false)
        };
    }, []);

    useEffect(() => {


        axios.get(url)
            .then(({data}) => {
                    setTimeout(()=> {
                        if(mount.current){
                            setState({
                                loading: false,
                                error: null,
                                data
                            });
                            console.log(data);
                        }
                    }, 2000)
                }
            )
            .catch(error => console.error(error));
    }, [url]);


    return state;



}
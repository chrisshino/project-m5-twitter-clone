import {useRef, useEffect} from 'react';
export function useOnChange(cb, dependencies){
    const ref = useRef(false);
    useEffect(() => {
        if(!ref.current){
            ref.current = true;
        } else{
            cb();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)
}
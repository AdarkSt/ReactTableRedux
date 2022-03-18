import { useEffect, useRef } from "react"
import {usePrevious} from "./usePrevious"

export const useEffectAllDepsChange = (fn, deps) => {
    const prevDeps = usePrevious(deps)
    const changeTarget = useRef()

    useEffect(()=> {
        if(changeTarget.current === undefined){
            changeTarget.current = prevDeps
        }

        if(changeTarget.current === undefined){
            return fn
        }

        if (changeTarget.current.every((dep, i) => dep !== deps[i])) {
            changeTarget.current = deps;
            return fn();
        }
    },[deps, fn, prevDeps])
}
export const ActivePill=({children})=>{
    return(
    <span className="px-2 py-1 block text-tclPrimary bg-tclPrimary/25 rounded rounded-full">{children}</span>
    )
}

export const InactivePill=({children})=>{
    return(
    <span className="px-2 py-1 block text-red-700 bg-red-700/25 rounded rounded-full">{children}</span>
    )
}
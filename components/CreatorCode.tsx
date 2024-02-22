import React from "react";
import { IconCheck, IconCopy } from '@tabler/icons-react';

interface Props {
    storeName: string;
    storeLink: string;
    storeImage: string;
    code: string;
    percentOff: number;
}

const CreatorCode: React.FC<Props> = ({storeName, storeLink, storeImage, code, percentOff}) => {
    const [copied, setCopied] = React.useState(false)

    function copyCode() {
        setCopied(true)
        navigator.clipboard.writeText(code).then()
        setTimeout(() => setCopied(false), 1500)
    }

    
    return <div className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-md">
        <a href={storeLink} target='_blank' className="h-[150px] flex items-center justify-center bg-neutral-800 dark:hover:bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-900 rounded-none rounded-tl-lg rounded-tr-lg">
            <img className="self-center" width="150" src={storeImage} alt={storeName}/>
        </a>
        <div className='p-2 flex items-center justify-center flex-col gap-2'>
            <p className="font-bold text-lg line-clamp-1">{storeName}</p>
            <p className="text-sm">Code: <code className="font-bold">{code}</code> {!copied ? <button onClick={copyCode}><IconCopy size={16}/></button> : <button><IconCheck size={16}/></button>}</p>
            <p className="text-sm self-end text-red-400 font-bold mt-4">{percentOff}% off</p>
        </div>
    </div>
}

export default CreatorCode
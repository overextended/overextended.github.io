const CreatorCodes: React.FC<{children: React.ReactNode}> = ({children}) => {

    return <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mt-4 gap-4">
        {children}
    </div>
}

export default CreatorCodes
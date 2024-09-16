import CreatorCode from '@components/CreatorCode'

function CreatorCodes (data: [string, string, string, number, string][]) {
    return (<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mt-4 gap-4">
        {data
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map((creator) => CreatorCode(creator))}
    </div>)
}

export default CreatorCodes
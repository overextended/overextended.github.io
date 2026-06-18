# Resources (/docs/guides)





<Cards>
  {getPageTreePeers(source.getPageTree(), "/docs/guides").map((peer) => (
      <Card key={peer.url} title={peer.name} href={peer.url}>
        {peer.description}
      </Card>
    ))}
</Cards>

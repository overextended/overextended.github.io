# Resources (/docs/resources)





<Cards>
  {getPageTreePeers(source.getPageTree(), "/docs/resources").map((peer) => (
      <Card key={peer.url} title={peer.name} href={peer.url}>
        {peer.description}
      </Card>
    ))}
</Cards>

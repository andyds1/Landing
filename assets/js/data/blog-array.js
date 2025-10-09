export const blogPosts = [
  {
    id: 1,
    title: 'Threat Intelligence: from threats to tactics',
    date: '2025-10-09',
    author: 'Andy DS',
    tags: ['cybersecurity', 'OSINT', 'Tech&Meet', 'Howest', 'urlScan', 'Censys', 'JA4S'],
    excerpt: 'Key insights from the Tech & Meet at Howest covering modern threat intelligence techniques. Learn how OSINT tools like urlScan, Censys, and JA4S fingerprinting are revolutionizing cyber threat detection and investigation.',
    content: `
      <p>Attended the Tech & Meet on 7 oktober @ Howest where I had the pleasure listening to two speakers from the CCB talk about modern threat intelligence. A demo was given on how big the impact of OSINT is to find and evaluate upcoming threats. Tools such as urlScan, Censys and JA4S fingerprinting were covered during this talk.</p>
      
      <h3>urlScan.io in OSINT Investigations</h3>
      <p><a href="https://urlscan.io/" target="_blank" rel="noopener noreferrer">urlScan.io</a> is described by experts as a "searchable archive of internet behavior," vital for bug bounty, threat hunting, and digital forensics. It allows for deep reconnaissance: extracting domains, JavaScript files, APIs, and key behavioral data from suspicious websites, including redirect chains and CMS libraries. Analysts rely on urlScan to uncover threat actor infrastructure and map how malicious sites operate, making it a goldmine for cyber investigators.</p>
      
      <h3>Sekoia Blog and Malicious JavaScript Tracking</h3>
      <p>Recent Sekoia blog posts detail campaigns like ClearFake's use of fingerprint.js hashes to deliver malware via drive-by downloads. Researchers have demonstrated how hashes (unique identifiers created by JavaScript code) or HTML content can link compromised sites to threat actors by tracing similarities across the web, thus aiding in mapping malicious infrastructure.</p>
      
      <h3>Censys, IP Mapping, and JA4S/J4 Fingerprinting</h3>
      <p><a href="https://search.censys.io/" target="_blank" rel="noopener noreferrer">Censys</a> remains foundational for internet-wide asset mapping, providing insight into arrays of IP addresses behind domain names. The JA4+ suite (which includes JA4S) upgrades network fingerprinting for multiple protocols, offering more robust and human-readable tracking of threat actors. JA4S fingerprints can reveal the persistence of attacker infrastructure, even if threat actors rotate domains or change surface-level artifacts. This is critical for threat-hunting and security analysis.</p>
      
      <h3>Pivoting</h3>
      <p>The concept of pivoting is validated as a best practice in modern OSINT investigations and threat hunting. Analysts trace banner or fingerprint hashes to uncover networks of related domains and IP addresses, often exposing sprawling attacker operations that would otherwise remain hidden.</p>
      
      <h3>Conclusion</h3>
      <p>Every tool and tactical process covered at the talk is confirmed to be essential and actively used in cybersecurity intelligence. The integration of urlScan, analysis of JavaScript hashes (as covered by Sekoia), IP mapping via Censys, and advanced fingerprinting like JA4S represents the current state of cyber threat detection. Pivoting from a small set of data points enables the discovery of broader campaigns and infrastructure, making these tools indispensable for defenders in today's threat landscape.</p>
    
      <p>Detailed write-up about the ClearFake campaign is available over at the <a href="https://blog.sekoia.io/clearfake-a-newcomer-to-the-fake-updates-threats-landscape/" target="_blank" rel="noopener noreferrer">Sekoia blog</a>.</p>    
  `
  }
]
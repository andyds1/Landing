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

      <img src="https://imagedelivery.net/-lSJL3_z6gkb_Ujn89aXMQ/d5031494-15ba-4a32-bcf5-6f366fc65000/public" alt="Threat Intelligence">

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
  },
  {
  id: 2,
  title: 'Hack The Future 2025: Building FishDex at Aquatopia',
  date: '2025-11-12',
  author: 'Andy DS',
  tags: ['hackathon', 'AI', 'mobile development', 'teamwork', 'Hack The Future', 'Antwerp'],
  excerpt: 'An unforgettable day at Hack The Future 2025 where my teammate Aaron Deceuninck and I built FishDex, an AI-powered fish identification app. Despite being cybersecurity students competing against software and UX engineering students, we reached the top three in our category.',
  content: `

    <img src="https://imagedelivery.net/-lSJL3_z6gkb_Ujn89aXMQ/ef544018-70f5-4408-9b33-6386d9fd2f00/public" alt="Aquatopia Banner">
    <p>Hack The Future 2025 was an unforgettable day of creativity, teamwork, and problem-solving. My teammate, <a href="https://www.linkedin.com/in/aaron-deceuninck-0a97402aa/" target="_blank" rel="noopener noreferrer">Aaron Deceuninck</a>, and I joined forces as "ACK Attack" to take on this year's aquatic-themed hackathon dubbed "Aquatopia."</p>

    <h3>The Challenge: "Gotta Catch 'Em All"</h3>
    <p>Our challenge, <a href="https://www.hackthefuture.be/2025/?dialog=challenge-113" target="_blank" rel="noopener noreferrer">"Gotta Catch 'Em All,"</a> was presented by the company <a href="https://www.rmdy.be/" target="_blank" rel="noopener noreferrer">RMDY</a>. The goal was to develop a mobile app capable of identifying different types of fish using AI-powered video analysis. The app would record a short clip of a fish, analyze it using integrated AI models, and then display detailed information about the species, including data markers, habitat insights, and general facts.</p>
    
    <p>We named our creation "FishDex," a playful nod to the iconic "PokeDex" from Pokémon. Beyond identification, we also managed to implement a chatbot feature to let users ask follow-up questions or request additional facts about their "caught" fish. While we couldn't fully implement the polished design we envisioned due to time constraints, we made sure the functionality worked seamlessly, a choice that truly paid off. Although some images went <span class="italic">mysteriously</span> missing while connecting the backend with the frontend, let's just call that a feature.</p>

    <p>Take a look at a brief <a href="/pages/project-detail.html?id=1">project demo</a> we recorded during the event.</p>
    
    <h3>Competing Beyond Our Field</h3>
    <p>Though Aaron and I are cybersecurity students, we proudly found ourselves competing shoulder to shoulder with students from software and UX engineering programs. We managed to reach the top 2 out of 15 teams, a remarkable result considering our background. We even had that feeling of being just one step away from a prize-winning finish.</p>
    
    <img src="https://imagedelivery.net/-lSJL3_z6gkb_Ujn89aXMQ/727a7890-d4bd-46f8-c64d-fd96957bbc00/public" alt="Final score showing 77% and 2 out of 15 teams">

    <h3>A Great Venue and Atmosphere</h3>
    <p>The event took place at Queen Elizabeth Hall in Antwerp, a stunning venue right next to the zoo and central train station. Hack The Future's organization was top-notch, from the warm morning reception with fresh coffee and breakfast to the afternoon sandwiches and delicious dinner options in the evening. A special bonus was the free access to Antwerp Zoo, which we couldn't resist visiting briefly during our lunch break.</p>
    
    <img src="https://imagedelivery.net/-lSJL3_z6gkb_Ujn89aXMQ/842d0dd2-32fb-41e4-7f0d-c878b8d11600/public" alt="Elephant at Antwerp Zoo">

    <h3>Wrapping Up the Day</h3>
    <p>After coding, pitching, and congratulating all the winners, we wrapped up what was undoubtedly an unforgettable day. Hack The Future 2025 was a reminder of how far passion, creativity and teamwork can go. Even when you step a little outside your comfort zone.</p>
  
  
    <p>More info about this year's Hack The Future can be found on the <a href="https://www.hackthefuture.be/2025/" target="_blank" rel="noopener noreferrer">official website</a>.</p>
  `
}

]
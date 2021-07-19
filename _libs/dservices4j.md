---
permalink: /libs/dservices4j/

title: "DServices4J"
excerpt: "The official Java Wrapper for Discordservices.net"

toc: true
---

# About
DServices4J is the official Java Wrapper for the Discordservices.net Bot list.  
It supports all current API-features available for the website.

## Installation
Please replace `{version}` with the [latest available version](https://github.com/DiscordServices/DServices4J/releases/latest)

### Gradle (Recommended)
```groovy
repositories{
  maven{ url = 'https://repo.codemc.io/repository/maven-public' }
}

dependencies{
  implementation 'net.discordservices:dservices4j:{version}'
}
```

### Maven
```xml
<repositories>
  <repository>
    <id>codemc</id>
    <url>https://repo.codemc.io/repository/maven-public</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>net.discordservices</groupId>
    <artifactId>dservices4j</artifactId>
    <version>{version}</version>
    <scope>provided</scope>
  </dependency>
</dependencies>
```

## Links

[<i class="fab fa-jenkins"></i> Jenkins](https://ci.codemc.io/job/DiscordServices/job/DServices4J/){: .btn .btn--info }  
[<i class="fab fa-github"></i> Source Code](https://github.com/DiscordServices/DServices4J){: .btn .btn--info }
---
permalink: /libs/javabotblockapi/

title: "JavaBotBlockAPI"
excerpt: "The official Java Wrapper for the BotBlock API."

toc: true
---

# About
JavaBotBlockAPI is the continuation of the [BotBlock4J](https://github.com/spide-r/BotBlock4J) library and the new official Java Wrapper for the [BotBlock API](https://botblock.org).  
Supported are all GET and POST methods the API provides and also contains a few QoL features such as Javacord and JDA modules to help in using the API to its full potential.

## Installation
Please replace `{version}` with the [latest available version](https://github.com/botblock/JavaBotBlockAPI/releases/latest)

### Gradle (Recommended)
```groovy
repositories{
    maven{ url = 'https://repo.codemc.io/repository/maven-public' }
}

dependencies{
    // Core Module. Always needed
    compile group: 'org.botblock', name: 'javabotblockapi-core', version: '{version}'

    // Request Module. Depends on Core
    compile group: 'org.botblock', name: 'javabotblockapi-request', version: '{version}'

    // JDA Module. Depends on Core and Request
    compile group: 'org.botblock', name: 'javabotblockapi-jda', version: '{version}'
    
    // Javacord Module. Depends on Core and Request
    compile group: 'org.botblock', name: 'javabotblockapi-javacord', version: '{version}'
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
  <!-- Core Module. Always needed -->
  <dependency>
    <groupId>org.botblock</groupId>
    <artifactId>javabotblockapi-core</artifactId>
    <version>{version}</version>
  </dependency>

  <!-- Request Module. Depends on Core -->
  <dependency>
    <groupId>org.botblock</groupId>
    <artifactId>javabotblockapi-request</artifactId>
    <version>{version}</version>
  </dependency>

  <!-- JDA Module. Depends on Core and Request -->
  <dependency>
    <groupId>org.botblock</groupId>
    <artifactId>javabotblockapi-jda</artifactId>
    <version>{version}</version>
  </dependency>

  <!-- Javacord Module. Depends on Core on Request -->
  <dependency>
    <groupId>org.botblock</groupId>
    <artifactId>javabotblockapi-javacord</artifactId>
    <version>{version}</version>
  </dependency>
</dependencies>

```

## Links

[<i class="fab fa-jenkins"></i> Jenkins](https://ci.codemc.io/job/botblock/job/JavaBotBlockAPI/)  
[<i class="fab fa-github"></i> Source Code](https://github.com/botblock/JavaBotBlockAPI)
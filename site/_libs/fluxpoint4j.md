---
permalink: /libs/fluxpoint4j/

title: "Fluxpoint4J"
excerpt: "The official Java Wrapper for the Fluxpoint.dev API"

toc: true
---

# About
Fluxpoint4J is the official Java Wrapper for the Fluxpoint.dev API.  
It provides features to create custom images, welcome images or to check the status of an MC server.

## Installation
Please replace `{version}` with the [latest available version](https://github.com/FluxpointDev/Fluxpoint4J/releases/latest)

### Gradle (Recommended)
```groovy
repositories{
  maven{ url = 'https://jitpack.io' }
}
dependencies{
  implementation 'com.github.fluxpointdev:Fluxpoint4J:{version}'
}
```

### Maven
```xml
<repositories>
  <repository>
    <id>jitpack</id>
    <url>https://jitpack.io</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>com.github.fluxpointdev</groupId>
    <artifactId>Fluxpoint4J</artifactId>
    <version>{version}</version>
    <scope>provided</scope>
  </dependency>
</dependencies>
```

## Links

[<i class="fab fa-github"></i> Source Code](https://github.com/FluxpointDev/Fluxpoint4J){: .btn .btn--info }

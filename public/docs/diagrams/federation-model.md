---
layout: default
title: federation model
---

# Federation Model

```mermaid
flowchart TD
TenantA --> FederationCore
TenantB --> FederationCore
FederationCore --> PolicyPlane --> ValidationClusters
```

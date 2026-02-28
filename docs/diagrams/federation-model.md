# Federation Model

```mermaid
flowchart TD
TenantA --> FederationCore
TenantB --> FederationCore
FederationCore --> PolicyPlane --> ValidationClusters
```

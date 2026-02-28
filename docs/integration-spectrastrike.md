---
layout: default
title: integration spectrastrike
---

# SpectraStrike Integration

Nyxera Nexus receives signed execution evidence from SpectraStrike wrappers and execution orchestration services.

## Required Inputs

- `execution_fingerprint`
- `attestation_hash`
- wrapper identity and tool metadata
- tenant and operator identity context
- Ed25519 signature envelope

## Integration Contract

1. SpectraStrike executes wrapper workload under policy.
2. Wrapper result is normalized into canonical telemetry.
3. Canonical telemetry is signed with SpectraStrike signing key.
4. Payload is sent to Nexus ingestion endpoint.
5. Nexus validates signature and schema.
6. Validated event is forwarded to VectorVue correlation.

## Endpoint Pattern

- Ingestion endpoint: `/api/v1/telemetry/ingest`
- Health endpoint: `/api/v1/telemetry/health`
- Verification endpoint: `/api/v1/telemetry/verify`

## Validation Rules

- Reject unsigned payloads.
- Reject schema-invalid telemetry.
- Reject tenant mismatch.
- Reject replayed `execution_fingerprint`.

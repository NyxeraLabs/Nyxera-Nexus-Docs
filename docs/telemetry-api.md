---
layout: default
title: telemetry api
---

# Telemetry API

Nexus telemetry APIs handle ingestion, verification, and evidence retrieval for signed offensive validation events.

## API Principles

- Signed payloads only
- Canonical schema enforcement
- Tenant isolation by default
- Replay protection via deterministic fingerprints

## Ingest Telemetry

`POST /api/v1/telemetry/ingest`

Accepts a signed telemetry envelope produced by SpectraStrike or trusted federation producers.

### Minimal Request Shape

```json
{
  "tenant_id": "00000000-0000-0000-0000-000000000000",
  "execution_fingerprint": "sha256:...",
  "attestation_hash": "sha256:...",
  "event_time": "2026-02-28T19:00:00Z",
  "payload": {},
  "signature": {
    "alg": "Ed25519",
    "key_id": "spectrastrike-prod-1",
    "sig": "base64..."
  }
}
```

### Success Response

```json
{
  "status": "accepted",
  "evidence_id": "evd_01J...",
  "correlation_state": "queued"
}
```

## Verify Envelope

`POST /api/v1/telemetry/verify`

Validates signature, schema, and fingerprint consistency without persisting evidence.

## Telemetry Health

`GET /api/v1/telemetry/health`

Returns ingestion health, queue depth status, and signature verification readiness.

## Retrieve Evidence

`GET /api/v1/telemetry/evidence/{evidence_id}`

Returns normalized evidence record and correlation metadata for the calling tenant.

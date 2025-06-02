# 🌐 AI Prompt Registration Protocol (APRP)

APRP defines the rules for registering a prompt, assigning a unique ID, computing prompt hashes, and resolving metadata.

- Uses SHA-256(body + author)
- Returns `apr-xxxxx` IDs
- Version history is append-only
- Supports public and restricted visibility
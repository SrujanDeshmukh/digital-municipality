# Digital Municipality

Monorepo containing:
- backend: Spring Boot REST API (Citizen CRUD) + PostgreSQL
- frontend: React + Vite UI for managing citizens
- docker-compose.yml: local dev with backend, frontend, and PostgreSQL
- k8s/: Kubernetes manifests for deployments/services
- .github/workflows/ci.yml: CI to build images and optionally deploy to Kubernetes

Quickstart (local)
1. Copy `.env.example` -> `.env` and adjust if needed
2. docker-compose up --build
3. Frontend: http://localhost:5173
4. Backend API: http://localhost:8080/api/citizens

CI/CD
- GitHub Actions builds backend & frontend images and pushes to GHCR.
- To enable cluster deployment, set `KUBE_CONFIG_DATA` secret with base64(kubeconfig).

License: MIT

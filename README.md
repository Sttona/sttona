# Sttona

An innovative, open-source CRM and business automation platform.

## 🚀 Overview

Sttona is a modern, enterprise-grade CRM and business automation platform designed to streamline business operations, enhance customer relationships, and automate workflows. Built with scalability and extensibility in mind, Sttona provides a comprehensive suite of tools for businesses of all sizes.

## 🏗️ Architecture

The project follows a monorepo structure:

```
sttona/
│── backend/           # API, business logic (Hasura, Keycloak, Node.js)
│── frontend/          # Next.js UI
│── services/          # Worker services (Redis, queue, automation engine)
│── infra/            # Infrastructure as Code (Docker, K8s, Terraform)
│── scripts/          # Utility scripts for setup & automation
│── .github/workflows # CI/CD pipelines
```

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Hasura, Node.js, Keycloak
- **Services**: Redis, Queue System
- **Infrastructure**: Docker, Kubernetes, Terraform
- **CI/CD**: GitHub Actions

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or later)
- Docker & Docker Compose
- Git

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sttona.git
   cd sttona
   ```

2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Start the development environment:
   ```bash
   docker-compose up
   ```

4. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000
   - Hasura Console: http://localhost:8080

## 🌿 Branching Strategy

- `main`: Production-ready code
- `dev`: Ongoing development
- `feature/*`: Feature-specific branches
- `hotfix/*`: Urgent bug fixes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Convention

- `feat:` New features
- `fix:` Bug fixes
- `chore:` Routine tasks, maintenance
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test-related changes
- `perf:` Performance improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers. 
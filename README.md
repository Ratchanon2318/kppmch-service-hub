# KPPMCH Service Hub (Digital Gateway)

**Integrated Service Orchestration | Nurse-Led Medical Roster | Edge-Optimized Performance**

An enterprise-grade digital portal engineered for **Kamphaeng Phet Municipal Community Hospital**. This "Digital Front Door" orchestrates clinical schedules, specialized medical services, and telemedicine integration into a single, user-centric mobile interface.

---

## 1. System Architecture: Nurse-to-Patient Pipeline

The system utilizes a **Decoupled Architecture** that empowers clinical staff to manage rosters via Google Workspace, while Vercel Edge handles high-performance delivery and automated LINE Flex Message responses.


```mermaid
graph TD
    %% 1. Input Layer (Nurse-Validated)
    subgraph Nurse_Operations [1. Clinical Administration]
        Nurse[Nurse Leader / Staff] -->|Direct Update| Doc[Google Doc / Sheet Roster]
    end

    %% 2. Orchestration & Edge Layer
    subgraph Edge_Infrastructure [2. Vercel Edge Network]
        Doc -.->|Data Synchronization| Vercel[Vercel Global Edge Store]
        Vercel -->|3. UI Interaction| WebApp[Next.js Gateway App]
        WebApp -->|4. Real-time View| User[Patient / Citizen]
        Vercel -->|5. Webhook Trigger| LINE_API[LINE Messaging API]
        LINE_API -->|6. Flex Message Response| User
    end

    %% Visual Styling
    style Doc fill:#4285F4,color:#fff,stroke:#333
    style Vercel fill:#000,color:#fff,stroke:#333,stroke-width:2px
    style WebApp fill:#f9f,stroke:#333
    style User fill:#007bff,color:#fff
    style LINE_API fill:#28a745,color:#fff

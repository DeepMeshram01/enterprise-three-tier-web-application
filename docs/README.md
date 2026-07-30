Enterprise Three-Tier Web Application on AWS (Architecture Diagram)
                                                👨‍💻 USER
                                           │
                                           │ HTTPS
                                           ▼
                              🌐 deepmeshram.online
                                  (Route 53)
                                           │
                                           ▼
                          🔒 AWS Certificate Manager
                              (SSL Certificate)
                                           │
                                           ▼
                              ☁ Amazon CloudFront
                           (Global CDN + HTTPS)
                                           │
                                           ▼
                     ┌────────────────────────────────┐
                     │ Internet-Facing Network LB     │
                     │     (Frontend Service)         │
                     └────────────────────────────────┘
                                           │
                                           ▼
═══════════════════════════════════════════════════════════════════════
                        Amazon EKS Cluster
═══════════════════════════════════════════════════════════════════════

                ┌─────────────────────────────────────┐
                │ Kubernetes Namespace                │
                │        enterprise-app               │
                └─────────────────────────────────────┘

                           ┌──────────────┐
                           │ Deployment   │
                           │  Frontend    │
                           └──────────────┘
                                  │
                     ReplicaSet (1 Replica)
                                  │
                           ┌──────────────┐
                           │ Frontend Pod │
                           │ React + Nginx│
                           └──────────────┘
                                  │
                                  │ HTTP
                                  ▼
                   Kubernetes Service (ClusterIP)
                                  │
                                  ▼
                     Backend LoadBalancer Service
                   (Internet Facing Network LB)
                                  │
                                  ▼
                           ┌──────────────┐
                           │ Deployment   │
                           │   Backend    │
                           └──────────────┘
                                  │
                     ReplicaSet (2 Replicas)
                    ┌─────────────┴─────────────┐
                    ▼                           ▼
             Backend Pod                 Backend Pod
           Node.js + Express         Node.js + Express
                    │                           │
                    └─────────────┬─────────────┘
                                  │
                                  ▼
                     Kubernetes Service (ClusterIP)
                                  │
                                  ▼
                          MySQL Deployment
                                  │
                             MySQL Pod
                                  │
                           Persistent Storage
═══════════════════════════════════════════════════════════════════════

                 Docker Hub
         (Application Images Repository)
                    ▲
                    │
         docker push / docker pull
                    │
              Jenkins Pipeline
                    ▲
                    │
            GitHub Repository
                    ▲
                    │
               Developer (You)


AWS Infrastructure
AWS Cloud
│
├── VPC
│
├── Public Subnet A
│      ├── NAT Gateway
│      ├── Internet Gateway
│      └── EKS Worker Node
│
├── Public Subnet B
│      └── EKS Worker Node
│
├── Private App Subnet A
│
├── Private App Subnet B
│
├── Private DB Subnet A
│
└── Private DB Subnet B


CI/CD Pipeline
Developer
     │
     ▼
GitHub Repository
     │
Webhook
     ▼
Jenkins
     │
     ├── Clone Repository
     │
     ├── Build Backend Docker Image
     │
     ├── Build Frontend Docker Image
     │
     ├── Push Images to Docker Hub
     │
     └── kubectl apply
                │
                ▼
         Amazon EKS Cluster
                │
                ▼
      Rolling Update Deployment
                │
                ▼
          Live Application
